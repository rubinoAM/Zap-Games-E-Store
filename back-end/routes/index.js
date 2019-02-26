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
  const selectQuery = `SELECT * FROM users`;
  const pgPromise = db.query(selectQuery);
  //console.log(pgPromise);
  pgPromise.then((data)=>{
    res.json(data);
  })
  //res.json(req.user);
});

module.exports = router;
