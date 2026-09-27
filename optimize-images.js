const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function optimizeImages() {
  const publicImagesDir = path.join(__dirname, "public", "images");

  // 1. Compress sandun-academic.jpg
  const academicPath = path.join(publicImagesDir, "sandun-academic.jpg");
  const tempAcademicPath = path.join(publicImagesDir, "temp-academic.jpg");
  if (fs.existsSync(academicPath)) {
    console.log("Optimizing sandun-academic.jpg...");
    await sharp(academicPath)
      .resize({ width: 1200 }) // Resize down if it's too huge
      .jpeg({ quality: 75 })
      .toFile(tempAcademicPath);
    fs.renameSync(tempAcademicPath, academicPath);
  }

  // 2. Compress sandun-portrait.jpg
  const portraitPath = path.join(publicImagesDir, "sandun-portrait.jpg");
  const tempPortraitPath = path.join(publicImagesDir, "temp-portrait.jpg");
  if (fs.existsSync(portraitPath)) {
    console.log("Optimizing sandun-portrait.jpg...");
    await sharp(portraitPath)
      .resize({ width: 800 })
      .jpeg({ quality: 75 })
      .toFile(tempPortraitPath);
    fs.renameSync(tempPortraitPath, portraitPath);
  }

  // 3. Convert sandun-research.png to WebP
  const researchPngPath = path.join(publicImagesDir, "sandun-research.png");
  const researchWebpPath = path.join(publicImagesDir, "sandun-research.webp");
  if (fs.existsSync(researchPngPath)) {
    console.log("Converting sandun-research.png to webp...");
    await sharp(researchPngPath)
      .resize({ width: 1200 })
      .webp({ quality: 80 })
      .toFile(researchWebpPath);
    // We can delete the PNG or keep it. Let's delete it to force next.js to use webp.
    fs.unlinkSync(researchPngPath);
  }

  console.log("Image optimization complete.");
}

optimizeImages().catch(console.error);
