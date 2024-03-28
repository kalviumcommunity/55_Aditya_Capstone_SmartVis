const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    Name: String,
    Email: String,
    WithWhom: String,
    TimeDate: Date,
    Company: String
});
const Model = mongoose.model("details", testSchema);
module.exports = {Model};