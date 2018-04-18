var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// setup mysql
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'Lesjam3!!3sjus8tify',
  database: 'budget'
});


pool.getConnection(function(err, connection) {
  connection.query('SELECT * FROM cat LIMIT 5', function (err, rows){
    console.log('Data received from database:\n');
    console.log(rows);
    connection.release();
    if (err) throw err;
  });
});

// http method: get
app.get('/categories', function (req, res) {
  var catList = [];
  pool.getConnection(function(err, connection) {
    connection.query('SELECT * FROM cat', function(err, rows, fields) {
      if (err) {
        res.status(500).json({
          "status_code": 500,
          "status_message": "connection error in get method"
        });
      } else {
        console.log('got somethin');
        for (var i = 0; i < rows.length; i++) {
          var category = {
            'category':rows[i].category,
            'cat_id':rows[i].cat_id,
            'parent_subclass':rows[i].parent_subclass
          }
          catList.push(category);
        }
        res.render('index', { 'catList': catList });
      }
    });
    connection.release();
  });
});


// basics
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
