const express = require('express');
const { upload, uploadFiles, getFiles } = require('./../controllers/file.controller');
const router = express.Router();

router.post('/multi-images-upload', upload.array('imagesArray', 8), uploadFiles)

module.exports = router;