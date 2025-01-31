const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

async function convertToWebP() {
  const inputDir = path.join(__dirname, '../public/Photos');
  const images = ['new_home_banner_1.avif', 'new_home_banner_2.avif'];

  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(inputDir, image.replace('.avif', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`Converted ${image} to WebP`);
    } catch (error) {
      console.error(`Error converting ${image}:`, error);
    }
  }
}

convertToWebP();
