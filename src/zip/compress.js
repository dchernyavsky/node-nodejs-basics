import fs from "fs";
import zlib from "zlib";

const compress = async () => {
  const inputFilePath = `${import.meta.dirname}/files/fileToCompress.txt`;
  const outputFilePath = `${import.meta.dirname}/files/archive.gz`;
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  const gzip = new zlib.Gzip();
  input.pipe(gzip).pipe(output);
};

await compress();
