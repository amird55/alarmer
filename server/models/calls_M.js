const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    room_number: {
        required: true,
        type: Number
    },
    bed_number: {
        required: true,
        type: Number
    },
    callStartTime: {
        required: true,
        type: String
    },
    callEndTime: {
        required: false,
        type: String
    }
});

module.exports = mongoose.model('alarmer_calls', dataSchema)
