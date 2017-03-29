const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  image: String,
  type: String
});

const Items = mongoose.model("items", itemSchema);
module.exports = Items;
