// creating a server
const express = require("express");
const approuter = require("./routes/userrRouter");
const app = express();
const port = 8080;
approuter.get("/", (req, res) => {
  res.json({ message: "hi, welcome to the page" });
});
app.use(approuter);
app.listen(port, (error) => {
  if (error) {
    console.log("server can't be created");
  } else {
    console.log(
      ` server created at port :${port} can be read from http://localhost:${port}`
    );
  }
});
