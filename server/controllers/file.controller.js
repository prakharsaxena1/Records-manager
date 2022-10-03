const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const DIR = './public/';
const File = require('./../models/files.model');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not accepted (.png, .jpg, .jpeg)'));
        }
    }
});

const uploadFiles = async (req, res) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (let i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }
    try{
        const images = await File.create({imagesArray: reqFiles});
        return res.status(201).json({ message: "Uploaded!", images});
    }catch (err){
        res.status(500).json({ err });
    }
}

module.exports = {
    upload,
    uploadFiles
}