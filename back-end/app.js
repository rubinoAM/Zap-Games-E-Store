var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const config = require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const helmet = require('helmet');
app.use(helmet());

//ALLOW CROSS ORIGIN
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//PASSPORT FILES
app.use(session({
  secret: 'Gbenga is a cool guy.',
  resave: false,
  saveUninitialized: true,
}));

const passport = require('passport');
const githubStrategy = require('passport-github').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

app.use(passport.initialize());
app.use(passport.session());

passport.use(new githubStrategy({
  clientID: config.passport.id,
  clientSecret: config.passport.secret,
  callbackURL: config.passport.callbackURL,
}, (accessToken, refreshToken, profile, cb) => {
  //console.log(profile);
  return cb(null,profile);
}));

// passport.use(new jwtStrategy({},(jwt_payload,done)=>{
  
// }));

passport.serializeUser((user,cb)=>{
  cb(null,user);
});

passport.deserializeUser((user,cb)=>{
  cb(null,user);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
