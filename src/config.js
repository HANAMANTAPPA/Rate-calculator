const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1/ratecalculator");

// Check database connected or not
connect
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch(() => {
    console.log("Database cannot be Connected");
  });

// Create Schema

const DataSchema = new mongoose.Schema({
  district: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

// collection part
const collection = new mongoose.model("districts", DataSchema);

module.exports = collection;
