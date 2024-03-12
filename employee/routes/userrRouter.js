const express = require("express");
const approuter = express.Router();

//user all
approuter.get("/user", (req, res) => {
  //console.log("2");
  res.json({ message: "users all feteched" });
});
//put
approuter
  .route("/user/:id")
  .put((req, res) => {
    //console.log("3");
    res.json({ message: "inserted a user" });
  })
  .delete((req, res) => {
    //console.log("4");
    res.json({ message: "deleted a user" });
  });

module.exports = approuter;
