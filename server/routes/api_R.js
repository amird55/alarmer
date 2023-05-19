const express = require("express");
const router = express.Router()
module.exports = router;
const callsModel = require("../models/calls_M");
const roomModel = require("../models/room_M");

router.post('/NewCall',async (req, res) => {
    let deviceId=req.query.did;
    let room_data=await roomModel.find({device_number:deviceId});

    const modelData = new callsModel({
        room_number:room_data.room_number,
        bed_number:room_data.bed_number,
        callStartTime:getTimeStamp(),
        callEndTime:''
    });
    modelData.save();
    res.redirect("/C/List");
});
