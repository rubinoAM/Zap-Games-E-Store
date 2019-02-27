var express = require('express');
var router = express.Router();
const config = require('../config');
const passport = require('passport');
const pgp = require('pg-promise')();
const connection = config.pgp;
const db = pgp(connection);
const bcrypt = require('bcrypt-nodejs');

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
  })
});

router.post('/register',(req,res,next)=>{
  //res.json(req.body);
  //Check if username exists
    //If not, insert
      //Create token
    //If so, let React know
    
  const checkUsernameQuery = `SELECT * FROM users WHERE username = $1`
  db.query(checkUsernameQuery,[req.body.username]).then(results=>{
    console.log(results);
    if(results.length === 0){
      const insertUserQuery = `INSERT INTO users (username) VALUES ($1);`;
      db.query(insertUserQuery,[req.body.username]).then(()=>{
        res.json({
          msg:"userAdded",
        })
      })
    } else {
      res.json({
        msg:"userExists",
      })
    }
  }).catch((error)=>{
    if (error){throw error;}
  })
})

module.exports = router;