import fs from "fs";

const read = async () => {
  const filePath = "src/fs/files/fileToRead.txt";
  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  const file = fs.readFileSync(filePath, "utf-8");
  console.log(file);
};

await read();
