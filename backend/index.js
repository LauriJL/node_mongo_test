require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");

//app.use(express.json);

// base endpoint, contents of routes
app.use("/api", routes);
// Connect to database with mongoose
mongoose.connect(mongoString + "testdatabase?retryWrites=true&w=majority").then(
  () => console.log("Connected to mongo atlas"),
  (err) => console.log("Failed to connect to mongo atlas. Reason", err)
);
const database = mongoose.connection;

database.on("error", () => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Connected to database.");
});

app.listen("3000", () => {
  console.log(`Server started at ${3000}`);
});
