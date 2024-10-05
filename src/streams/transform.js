import stream from "stream";

const transformer = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(Buffer.from(chunk.toString().split("").reverse().join("")));
    callback();
  },
});

const transform = async () => {
  stream.pipeline(process.stdin, transformer, process.stdout, () => {});
};

await transform();
