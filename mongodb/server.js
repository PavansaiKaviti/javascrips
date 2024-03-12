const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = 8080;
const app = express();
// creating a client
const uri =
  "mongodb+srv://pavansai_kaviti:Pavansai12345@pavansai.59krwiq.mongodb.net/student_database";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const connectdb = async () => {
  try {
    await client.connect();
    console.log("connected succesfully");
    //database db
    const schooldb = client.db("student_info");
    //collection
    const students_info = schooldb.collection("students_info");
    // document
    //const result = students_info.find();
    //const result1 = await result.toArray();
    // const result = await students_info.findOne({ name: "pavansai" });
    const greater = await students_info
      .find({}, { age: { $gt: 20 } })
      .toArray();
    console.log(greater);
    const lessthan = await students_info.find({ age: { $lt: 20 } }).toArray();
    console.log(lessthan);
  } catch (error) {
    console.log("error occured", error);
  }
};
connectdb();
app.get("/", (req, res) => {
  res.send("hi am here to install mondo db drivers");
});
app.listen(port, (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log(`port reads at : http://localhost:${port}`);
  }
});
