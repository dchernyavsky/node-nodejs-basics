import fs from "fs";

const write = async () => {
  const writableStream = fs.createWriteStream(
    `${import.meta.dirname}/files/fileToWrite.txt`,
    {
      encoding: "utf-8",
    }
  );
  process.stdin.pipe(writableStream);
};

await write();
