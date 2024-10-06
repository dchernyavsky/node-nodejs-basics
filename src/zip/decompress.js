import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const inputFilePath = `${import.meta.dirname}/files/archive.gz`;
  const outputFilePath = `${import.meta.dirname}/files/fileToCompress1.txt`;
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  const gunzip = new zlib.Gunzip();
  input.pipe(gunzip).pipe(output);
};

await decompress();
