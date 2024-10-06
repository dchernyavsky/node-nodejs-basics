import fs from "fs";

const rename = async () => {
  const sourcePath = "src/fs/files/wrongFilename.txt";
  const destinationPath = "src/fs/files/properFilename.md";
  if (!fs.existsSync(sourcePath) || fs.existsSync(destinationPath)) {
    throw new Error("FS operation failed");
  }
  fs.renameSync(sourcePath, destinationPath);
};

await rename();
