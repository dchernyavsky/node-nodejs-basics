import fs from "fs";

const create = async () => {
  const filePath = "src/fs/files/fresh.txt";
  const fileContent = "I am fresh and young";
  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  fs.writeFileSync(filePath, fileContent);
};

await create();
