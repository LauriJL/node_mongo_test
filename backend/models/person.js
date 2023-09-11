const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Person = new Schema({
  first_name: { required: true, type: String },
  last_name: { required: true, type: String },
  age: { required: false, type: Number },
  profession: { required: false, type: String },
  email: { required: false, type: String },
});

module.exports = mongoose.model("person", Person);
