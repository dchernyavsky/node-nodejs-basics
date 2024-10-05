import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const filePath = `${import.meta.dirname}/files/fileToCalculateHashFor.txt`;
  const hash = crypto.createHash("sha256");
  const readStream = fs.createReadStream(filePath);

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
