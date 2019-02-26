var express = require('express');
var router = express.Router();
const config = require('../config');
const passport = require('passport');

//Github Auth Route
router.get('/auth/github', passport.authenticate('github'));

module.exports = router;
