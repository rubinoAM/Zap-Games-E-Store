var express = require('express');
var router = express.Router();
const config = require('../config');
const passport = require('passport');

//Github Auth Routes
router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github'), (req,res,next)=>{
  res.json(req.user);
});

module.exports = router;
