var express = require('express');
var router = express.Router();
const passport = require('passport');
const db = require('../database');
const bcrypt = require('bcrypt-nodejs');
const randToken = require('rand-token');

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

//Individual Game
router.get('/game/:id',(req,res,next)=>{
  res.json(req.body);
})

//Log In
router.post('/login',(req,res,next)=>{
  const checkUsernameQuery = `SELECT * FROM users WHERE username = $1;`;
  const username = req.body.username;
  const password = req.body.password

  db.query(checkUsernameQuery,[username]).then(results=>{
    //console.log(results);
    if(results.length === 0){
      res.json({
        msg:'userNotFound',
      })
    } else {
      const checkHash = bcrypt.compareSync(password,results[0].password);
      if(checkHash){
        const token = randToken.uid(50);
        const updateTokenQuery = `UPDATE users SET token = $1 WHERE username = $2;`;
        db.query(updateTokenQuery,[token,username]).catch(error => {if(error){throw error}});
        res.json({
          msg:'loggedIn',
          token:token,
          username:username,
        });
      } else {
        res.json({
          msg:'badPassword',
        })
      }
    }
  }).catch((err)=>{
    if(err){throw err}
  })
})

//Register
router.post('/register',(req,res,next)=>{
  const checkUsernameQuery = `SELECT * FROM users WHERE username = $1;`;
  db.query(checkUsernameQuery,[req.body.username]).then(results=>{
    //console.log(results);
    if(results.length === 0){
      const insertUserQuery = `INSERT INTO users (username,password,token) VALUES ($1,$2,$3);`;
      const token = randToken.uid(50);
      const hash = bcrypt.hashSync(req.body.password);
      db.query(insertUserQuery,[req.body.username,hash,token]).then(()=>{
        res.json({
          msg:"userAdded",
          token:token,
          username: req.body.username,
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

//Logout
router.get('/logout',(req,res,next)=>{
  res.json({
    msg:'',
    username:'',
    token:'',
  })
})

module.exports = router;