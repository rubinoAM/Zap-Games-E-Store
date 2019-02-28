var express = require('express');
var router = express.Router();
const db = require('../database');

//This middleware is only applied at /games

router.get('/getHome',(req,res,next)=>{
    res.json("GAMES");
});

module.exports = router;