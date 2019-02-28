var express = require('express');
var router = express.Router();
const db = require('../database');

//This middleware is only applied at /games

router.get('/getHome',(req,res,next)=>{
    const gameQuery = `SELECT * FROM games
        WHERE screenshot_url IS NOT NULL
        ORDER BY popularity DESC
        LIMIT 4;`;

        db.query(gameQuery).then((results)=>{
            res.json(results);
        }).catch((err)=>{if(err){throw err}});
});

module.exports = router;