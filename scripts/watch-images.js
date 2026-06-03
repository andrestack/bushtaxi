#!/usr/bin/env node

/**
 * Image Watch Mode
 * 
 * Watches public/img folder and auto-converts new images to WebP.
 * - Uses fs.watch for native file system watching
 * - Debounced to avoid multiple conversions
 * - Only processes new files (not modifications to existing webp)
 */

const fs = require("fs");
const path = require("path");
const { convertImage } = require("./convert-images");

const IMG_DIR = path.join(process.cwd(), "public", "img");
const WATCH_DEBOUNCE = 1000; // Wait 1 second after last change

let debounceTimer = null;
const processedFiles = new Set();

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  const supported = [".jpg", ".jpeg", ".png", ".tiff", ".tif", ".gif", ".avif", ".heic", ".heif"];
  return supported.includes(ext);
}

function shouldProcess(filename) {
  // Skip if already processed in this session
  if (processedFiles.has(filename)) return false;

  // Skip hidden files
  if (filename.startsWith(".")) return false;

  // Skip if already webp
  if (filename.toLowerCase().endsWith(".webp")) return false;

  // Skip SVGs
  if (filename.toLowerCase().endsWith(".svg")) return false;

  return isImageFile(filename);
}

async function handleFile(filename) {
  if (!shouldProcess(filename)) return;

  const filepath = path.join(IMG_DIR, filename);

  // Wait a moment for file to be fully written
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Check file exists
  try {
    await fs.promises.access(filepath);
  } catch {
    return; // File was deleted or moved
  }

  console.log(`\n📁 New file detected: ${filename}`);
  processedFiles.add(filename);

  await convertImage(filepath);
}

function startWatching() {
  console.log("👁️  Watching public/img/ for new images...");
  console.log("Press Ctrl+C to stop\n");

  const watcher = fs.watch(IMG_DIR, { recursive: false }, (eventType, filename) => {
    if (eventType !== "rename" || !filename) return;

    // Debounce to handle rapid file system events
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleFile(filename);
    }, WATCH_DEBOUNCE);
  });

  // Handle graceful shutdown
  process.on("SIGINT", () => {
    console.log("\n\n🛑 Stopping watcher...");
    watcher.close();
    process.exit(0);
  });

  process.on("SIGTERM", () => {
    watcher.close();
    process.exit(0);
  });
}

// Run if called directly
if (require.main === module) {
  startWatching();
}

module.exports = { startWatching };
