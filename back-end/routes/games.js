var express = require('express');
var router = express.Router();
const db = require('../database');

//This middleware is only applied at /games
router.get('/getHome',(req,res,next)=>{
    const gameQuery = `SELECT * FROM games
        WHERE screenshot_url IS NOT NULL
        ORDER BY RANDOM()
        LIMIT 4;`;

        db.query(gameQuery).then((results)=>{
            res.json(results);
        }).catch((err)=>{if(err){throw err}});
});

router.get('/:gid',(req,res)=>{
    const gid = req.params.gid;
    const selectQuery = `SELECT * FROM games WHERE id = $1;`;

    db.query(selectQuery,[gid]).then((gameData)=>{
        res.json(gameData)
    }).catch((err)=>{
        if(err){throw err}
    })
})

module.exports = router;