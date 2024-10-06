import fs from "fs";

const remove = async () => {
  const filePath = "src/fs/files/wrongFilename.txt";
  fs.unlink(filePath, (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
