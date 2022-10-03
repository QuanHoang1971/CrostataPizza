const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://quan1:Congthanh321@cluster0.a8obssa.mongodb.net/pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
