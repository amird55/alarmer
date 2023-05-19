const express = require("express");
const router = express.Router()
module.exports = router;
const callsModel = require("../models/calls_M");
const roomModel = require("../models/room_M");

router.get('/Add',(req, res) => {
    res.render("callAdd", {pageTitle:"הוספת קריאה",
        item:{}
    });
});
router.post('/Add',(req, res) => {
    const modelData = new callsModel({
        room_number:req.body.room_number,
        bed_number:req.body.bed_number,
        callStartTime:req.body.callStartTime,
        callEndTime:req.body.callEndTime
    });
    modelData.save();
    res.redirect("/C/List");
});
router.get('/List',async (req, res) => {
    let room_data=await roomModel.find();
    let Dayarim={};
    for(let item of room_data){
        Dayarim[`${(await item).room_number}_${(await item).bed_number}`]=(await item).dayar_name;
    }
    console.log("router",Dayarim)
    let calls_data=await callsModel.find();
    res.render("callsList", {pageTitle:"ניהול קריאות",
        Dayarim:Dayarim,
        data:calls_data
    });
});
router.get('/Edit',async (req, res) => {
    let item_data=await callsModel.findById(req.query.id);
    res.render("callAdd", {pageTitle:"עריכת קריאה",
        item:item_data
    });
});
router.post('/Edit',async (req, res) => {
    const modelData = {
        room_number:req.body.room_number,
        bed_number:req.body.bed_number,
        callStartTime:req.body.callStartTime,
        callEndTime:req.body.callEndTime
    };
    let item_data=await callsModel.findByIdAndUpdate(req.query.id,modelData);
    res.redirect("/C/List");
});
router.get('/Delete',async (req, res) => {
    let item_data=await callsModel.findByIdAndDelete(req.query.id);
    res.redirect("/C/List");
});