"use strict";

const fs = require("fs"),
  // filename = process.argv[2];
  // if (!filename) {
  //   throw Error("A file to watch must be specified!");
  // }
fs.watch(filename, function(event, fileName) {
  // console.log("event: " + event + " filename: " + fileName);
  console.log("File "+ filenames +" just changed!");
});

// // print process.argv
// process.argv.forEach(function(val, index, array) {
//   console.log(index + ': ' + val);
// });

console.log("Now watching " + filename + " for changes...");
