const fs = require("fs");
//console.log(fs);
//using sync
const text = fs.readFile("./text.tx", "utf-8", (error) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("file has successfully returned");
  }
});
console.log(text);
// using promise
const fs = require("fs").promises;
const fileread = async () => {
  try {
    const text = await fs.readFile("./text.txt", "utf8");
    console.log(text);
  } catch (error) {
    console.log(error);
  }
};
fileread();
