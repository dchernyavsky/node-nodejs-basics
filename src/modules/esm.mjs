import { createServer as createServerHttp } from "http";
import { release, version } from "os";
import path from "path";
import a from "./files/a.json" with { type: "json" };
import b from "./files/b.json" with { type: "json" };
import "./files/c.js";

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const random = Math.random();

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { myServer, unknownObject };