var express = require('express');
var router = express.Router();
const db = require('../database');

router.post('/getCart',(req,res,next)=>{
    const token = req.body.token;
    const getUserQuery = `SELECT id FROM users WHERE token = $1;`;

    db.query(getUserQuery,[token]).then((results)=>{
        if(results.length === 0){
            res.json({
                msg:'badToken',
            })
        } else {
            const uid = results[0].id;
        }
    }).catch((err)=>{
        if (err){throw err}
    });
})

router.post('/updateCart',(req,res,next)=>{
    const token = req.body.token;
    const itemId = req.body.itemId;
    const getUserQuery = `SELECT id FROM users WHERE token = $1;`;

    db.query(getUserQuery,[token]).then((results)=>{
        if(results.length === 0){
            res.json({
                msg:'badToken',
            })
        } else {
            const uid = results[0].id;
            const addToCartQuery = `INSERT INTO cart (uid,gid,dateadded)
                VALUES ($1,$2,NOW());`;

            db.query(addToCartQuery,[uid,itemId]).then(()=>{
                const getCartTotalsQuery = `SELECT * FROM cart WHERE uid = $1;`;
                db.query(getCartTotalsQuery,[uid]).then((results)=>{
                    res.json(results);
                })
                .catch((err)=>{
                    if(err){throw err}
                });
            })
            .catch((err)=>{
                if(err){throw err}
            });
        }
    }).catch((err)=>{
        if (err){throw err}
    });
})

module.exports = router;