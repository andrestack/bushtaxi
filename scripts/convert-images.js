#!/usr/bin/env node

/**
 * Image to WebP Converter
 * 
 * Converts all images in public/img to WebP format.
 * - Skips SVG files
 * - Skips existing WebP files
 * - Deletes original files after conversion
 * - Quality: 80%
 */

const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const IMG_DIR = path.join(process.cwd(), "public", "img");
const QUALITY = 80;

// Supported input formats
const SUPPORTED_FORMATS = [".jpg", ".jpeg", ".png", ".tiff", ".tif", ".gif", ".avif", ".heic", ".heif"];

async function convertImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath, ext);
  const outputPath = path.join(path.dirname(inputPath), `${basename}.webp`);

  // Skip if already webp
  if (ext === ".webp") {
    console.log(`⏭️  Skipping (already WebP): ${path.basename(inputPath)}`);
    return;
  }

  // Skip SVGs
  if (ext === ".svg") {
    console.log(`⏭️  Skipping (SVG): ${path.basename(inputPath)}`);
    return;
  }

  // Skip unsupported formats
  if (!SUPPORTED_FORMATS.includes(ext)) {
    console.log(`⏭️  Skipping (unsupported format): ${path.basename(inputPath)}`);
    return;
  }

  // Skip if webp already exists
  try {
    await fs.access(outputPath);
    console.log(`⏭️  Skipping (WebP exists): ${path.basename(inputPath)}`);
    return;
  } catch {
    // WebP doesn't exist, proceed with conversion
  }

  try {
    const inputStats = await fs.stat(inputPath);
    const inputSize = (inputStats.size / 1024 / 1024).toFixed(2);

    console.log(`🔄 Converting: ${path.basename(inputPath)} (${inputSize} MB)`);

    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const outputStats = await fs.stat(outputPath);
    const outputSize = (outputStats.size / 1024 / 1024).toFixed(2);
    const savings = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

    // Delete original
    await fs.unlink(inputPath);

    console.log(`✅ Converted: ${basename}.webp (${outputSize} MB) - ${savings}% smaller`);
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(inputPath)}:`, error.message);
  }
}

async function convertAll() {
  console.log("🖼️  Starting image conversion...\n");

  try {
    const files = await fs.readdir(IMG_DIR);
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return SUPPORTED_FORMATS.includes(ext) || ext === ".webp" || ext === ".svg";
    });

    if (imageFiles.length === 0) {
      console.log("No images found in public/img/");
      return;
    }

    console.log(`Found ${imageFiles.length} files\n`);

    for (const file of imageFiles) {
      await convertImage(path.join(IMG_DIR, file));
    }

    console.log("\n✨ Conversion complete!");
  } catch (error) {
    console.error("Error reading directory:", error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  convertAll();
}

module.exports = { convertImage, convertAll };
