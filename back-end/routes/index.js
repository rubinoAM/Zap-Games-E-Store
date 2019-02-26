var express = require('express');
var router = express.Router();
const config = require('../config');
const passport = require('passport');
const pgp = require('pg-promise')();
const connection = config.pgp;
const db = pgp(connection);

//Github Auth Routes
router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github'), (req,res,next)=>{
  const selectQuery = `SELECT * FROM users;`;
  const pgPromise = db.query(selectQuery);
  pgPromise.then((data)=>{
    /* const insertQuery = `INSERT INTO users (username,token) VALUES (?,?);`

    let userName = req.user.username;
    let userToken;

    if(data.length === 0){
      db.query(insertQuery,[userName,userToken],(err,results)=>{
        if(err){throw err}
      })
    } else {

    } */
    res.json(data);
  })
});

module.exports = router;
