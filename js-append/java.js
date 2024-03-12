const fs = require("fs").promises;
const append = async () => {
  try {
    await fs.appendFile(
      "./text.txt",
      "Outside, the city continues its relentless rhythm, but within the walls of the cafe, time seems to stand still. It's a haven for dreamers, thinkers, and storytellers—a place where inspiration is brewed alongside every cup of coffee."
    );
    console.log(" i am good");
  } catch (error) {
    console.log(error);
  }
};
append();
