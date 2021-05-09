const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  name: String,
  birthday: Date,
  address: String,
  CMT: Number,
  SoHieu: String,
  createAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Patient", patientSchema);