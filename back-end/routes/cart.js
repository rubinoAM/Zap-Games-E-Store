var express = require('express');
var router = express.Router();
const db = require('../database');

router.post('/getCart',(req,res,next)=>{
    res.json("BARK BARK");
})

module.exports = router;