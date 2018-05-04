// node requirements
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');

// knex config
const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// require routes
var index = require('./routes/index');
var categories = require('./routes/categories');

// require controllers
var categoryControllers = require('./controllers/categories.js');

// master app object
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// basics
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));

// use routes
app.use('/', index);
app.get('/categories', categories);

// testing knex connection
// knex.select().table('cat')
//   .then (console.log('good to go'))
//   .then (rows => {
//     console.log(rows[2]);
//   })  
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('404. There\'s a mistake somewhere.');
  err.status = 404;
  next(err);
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

//exports
module.exports = app;
