import { Buffer } from "buffer";
import assert from "assert";

const size = +(process.argv[2] || 100);
const n = +(process.argv[3] || 100);
const buf = [];

assert(typeof size === "number", "size must be a number");

for (let i = 0; i < n; i++) {
  buf.push(Buffer.alloc(size));
  const heapSize = process.memoryUsage().heapTotal;
  process.stdout.write(heapSize + "\n");
}
