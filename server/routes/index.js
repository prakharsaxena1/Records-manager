const express = require('express');
const router = express.Router();

router.use('', require("./record.router"))
router.use('/img', require("./file.router"))

module.exports = router;
