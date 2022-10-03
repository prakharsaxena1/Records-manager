const Record = require('../models/record.model');

const viewRecord = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);
        if (record == null) {
            return res.status(404).json({ status: 'failed', message: `Record of given ID does not exist` });
        }
        return res.status(200).json({ status: 'success', message: `Contains 1 record`, record });
    } catch (err) {
        return res.status(400).json({ status: 'failed', message: "Invalid ID" });
    }
}

const viewRecords = async (req, res) => {
    const records = await Record.find();
    return res.status(200).json({
        status: 'success',
        message: `Contains ${records.length} records`,
        records
    });
}

const addRecord = async (req, res) => {
    const data = {
        name: req.body.bikeName,
        price: req.body.bikePrice,
    }
    try {
        const record = await Record.create(data);
        return res.status(200).json({ status: 'success', message: `Record created`, record });
    } catch (err) {
        if (err.name === 'MongoServerError' && err.code === 11000) {
            return res.status(422).json({ status: "failed", message: 'Record with same name already exist!' });
        }
        return res.status(400).json({ status: 'failed', message: 'Error creating secret' });
    }
}

const updateRecord = async (req, res) => {
    const record = await Record.findOneAndUpdate({ _id: req.body.id }, { name: req.body.update.bikeName, price: req.body.update.bikePrice });
    if (record === null) {
        return res.status(400).json({ status: 'failed', message: "invalid id" });
    }
    return res.status(200).json({ status: 'success', message: `updated record`, record });
}

const deleteRecord = async (req, res) => {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (record === null) {
        return res.status(400).json({ status: 'failed', message: "invalid id" });
    }
    return res.status(200).json({ status: 'success', message: `Record deleted` });
}

module.exports = {
    viewRecord,
    viewRecords,
    addRecord,
    updateRecord,
    deleteRecord
}