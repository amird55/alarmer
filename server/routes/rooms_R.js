const express = require('express');
const router = express.Router()
module.exports = router;

router.get('/getAll', (req, res) => {
    res.send('Get All API')
})
