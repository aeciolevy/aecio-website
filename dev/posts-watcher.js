import fs from "fs";
import { blogDir, vaquejadaDir } from "./getSrcDirectoryPath.js";
import { generatePostsData } from "./generate-posts-data.js";

const directoriesToWatch = [blogDir, vaquejadaDir];

console.log("### Post file watcher running!");

let timeout = null;
const hashmap = {};

directoriesToWatch.forEach(directory => {

  console.log("### Watching directory:", directory);
  fs.watch(directory, (event, filename) => {
    if (event === 'rename') {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        // Your code to run after the delay
        await generatePostsData();
        console.log("### Post data generated");
      }, 5000);
    }
  });
});

