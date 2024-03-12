const express = require("express");
const app = express();
const port = 8080;
//const mongodb = require("mongodb");
//const { MongoClient, ServerApiVersion } = mongodb;
const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const url =
  "mongodb+srv://pavansai_kaviti:Pavansai12345@pavansai.59krwiq.mongodb.net/student_database";
const connectdb = async () => {
  try {
    await mongoose.connect(url);
    console.log("connect to mongodb");
    // create a schema
    const userprofileschema = new mongoose.Schema({
      username: String,
      age: Number,
      birthday: Date,
      isActive: Boolean,
      gmail: String,
      hobbies: [String],
    });
    // creating model through schema
    const User = mongoose.model("User", userprofileschema);
    const added = await User.create({
      username: "PAVANSAI_KAVITI",
      age: 23,
      birthday: new Date(4 - 16 - 2000),
      isActive: true,
      gmail: "pavan94901@gmail.com",
      hobbies: ["reading", "sleeping"],
    });
    console.log(added);
  } catch (error) {
    console.log("error :", error);
  }
};
connectdb();
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(
  port,
  console.log(`port successfully connected at http://localhost:${port}`)
);
