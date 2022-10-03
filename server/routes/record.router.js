// Dependencies
const express = require("express");
const router = express.Router();
const recordController = require('../controllers/record.controller')

// Routes
// Add
router.route('/record')
    .get(recordController.viewRecords)
    .post(recordController.addRecord)
    .put(recordController.updateRecord)
// Get 1 record
router.route('/record/:id')
    .get(recordController.viewRecord)
    .delete(recordController.deleteRecord)

// Exports
module.exports = router;