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
  let userName = req.user.username;
  
  pgPromise.then((data)=>{
    const insertQuery = `INSERT INTO users (username) VALUES ($1);`;
    const loginQuery = `SELECT * FROM users WHERE username = $1;`;

    if(data.length === 0){
      db.query(insertQuery,[userName]);
    } else {
      db.query(loginQuery,[userName]);
    }
    //res.json(data);
  })
  //res.json(req.user);
});

module.exports = router;