const express = require("express");
const router = express.Router()
module.exports = router;
const callsModel = require("../models/calls_M");
const roomModel = require("../models/room_M");


router.get('/NewCall',async (req, res) => {
    getTimeStamp=require("../gen_func").getTimeStamp;
    let deviceId=req.query.did;
    let room_data_arr=await roomModel.find({device_number:deviceId});
    let room_data=room_data_arr[0];
    // console.log(room_data);

    const modelData = new callsModel({
        room_number:room_data.room_number,
        bed_number:room_data.bed_number,
        callStartTime:getTimeStamp(),
        callEndTime:''
    });
    modelData.save();
    res.send("1");
    // res.redirect("/C/List");
});
