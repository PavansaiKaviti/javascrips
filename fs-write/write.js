const fs = require("fs").promises;
//sync
//const write = fs.writeFileSync("./new.txt", "i am a good boy");
//const read = fs.readFileSync("./new.txt");

//async using promises
const writingnewtext = async () => {
  try {
    await fs.writeFile("./new.txt", "coming");
    console.log(" i am good");
  } catch (error) {
    console.log(error);
  }
};
writingnewtext();
