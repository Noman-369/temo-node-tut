//npm - global command, comes with node
//npm--version
//local dependency= use it only in this project
//npm i <packageName>
//global dependency -use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)
//package.json - manifest file (stores important info about project/package)
//manual approach (create package,json in the root ,creat properties etc)
//npm init (step by step enter to skip)
//npm init -y (everyting default)
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);