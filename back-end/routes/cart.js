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
            const getCartTotalsQuery = `SELECT * FROM cart
                INNER JOIN games ON games.id = cart.gid
                WHERE uid = $1;`;
            db.query(getCartTotalsQuery,uid).then((results)=>{
                const totalsQuery = `SELECT SUM(price) AS totalprice, COUNT(price) AS totalitems FROM cart
                    INNER JOIN games ON games.id = cart.gid
                    WHERE uid = $1;`;
                
                db.query(totalsQuery,[uid]).then((totalNumbers)=>{
                    const respData = {
                        contents: results,
                        total: totalNumbers[0].totalprice,
                        item: totalNumbers[0].totalitems,
                    }

                    res.json(respData);
                });
            }).catch((err)=>{
                if(err){throw err}
            });
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