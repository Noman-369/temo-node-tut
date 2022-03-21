//there are two methods of using FS;
//first one is synchronous approach.
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
// writeFileSync(
//   "./content/result-sync.txt",
//   `here is my result:${first}, ${second}`
// );
//If there is any file named result-sync.txt than node will overwrite this file with out argument
//if there is no such file than node will definitly create one with our text in it.
//lets check it.
writeFileSync("./content/result-sync.txt", "hello world");
