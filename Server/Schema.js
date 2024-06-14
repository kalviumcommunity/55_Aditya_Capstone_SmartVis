const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    Company: String,
    Purpose: String,
    WithWhom: String,
    TimeDate: String,
    Duration: Number,
    
});
const Model = mongoose.model("details", testSchema);
module.exports = {Model};