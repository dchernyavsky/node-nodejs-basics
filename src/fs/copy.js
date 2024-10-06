import fs from "fs";

const copy = async () => {
  const sourcePath = "src/fs/files/";
  const destinationPath = "src/fs/files_copy/";
  if (!fs.existsSync(sourcePath) || fs.existsSync(destinationPath)) {
    throw new Error("FS operation failed");
  }
  fs.cpSync(sourcePath, destinationPath, { recursive: true });
};

await copy();
