const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({ imagesArray: { type: Array }}, { collection: 'files'});

module.exports = mongoose.model('File', fileSchema)