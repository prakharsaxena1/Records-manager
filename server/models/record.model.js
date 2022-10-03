const mongoose = require("mongoose");

const record = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    __v: { type: Number, select: false}
});

const Records = mongoose.model("Records", record);
module.exports = Records;
