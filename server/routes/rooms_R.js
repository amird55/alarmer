const express = require('express');
const router = express.Router()
module.exports = router;

const roomModel=require("../models/room_M");

router.get('/SaveDummy', (req, res) => {
    const modelData = new roomModel({
        room_number:15,
        bed_number:1,
        dayar_name:"amir"
    });
    modelData.save();
    res.send('Saved Dummy');
});
router.get('/Add',(req, res) => {
    res.render("roomAdd", {pageTitle:"הוספת חדר",
        item:{}
    });
});
router.post('/Add',(req, res) => {
    const modelData = new roomModel({
        room_number:req.body.room_number,
        bed_number:req.body.bed_number,
        dayar_name:req.body.dayar_name,
        device_number:req.body.device_number
    });
    modelData.save();
    res.send('Saved ');
});
router.get('/List',async (req, res) => {
    let room_data=await roomModel.find();
    res.render("roomList", {pageTitle:"ניהול חדרים",
        data:room_data
    });
});
router.get('/Edit',async (req, res) => {
    let item_data=await roomModel.findById(req.query.id);
    res.render("roomAdd", {pageTitle:"עריכת חדר",
        item:item_data
    });
});