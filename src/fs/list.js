import fs from "fs";

const list = async () => {
  const folderPath = "src/fs/files/";
  if (!fs.existsSync(folderPath)) {
    throw new Error("FS operation failed");
  }
  const filenames = fs.readdirSync(folderPath);
  console.log(filenames);
};

await list();
