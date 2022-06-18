import parse from "./parser.js";
import fs from "fs";

function main() {
  fs.readFile("index.xml", "utf-8", async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const result = await parse(data);
    //console.log(result);
  });
}

main();
