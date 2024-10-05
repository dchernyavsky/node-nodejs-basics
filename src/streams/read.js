import fs from "fs";

const read = async () => {
  const filePath = `${import.meta.dirname}/files/fileToRead.txt`;
  const readableStream = fs.createReadStream(filePath, { encoding: "utf-8" });
  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk.toString());
  });
};

await read();
