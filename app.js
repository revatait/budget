var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');


var index = require('./routes/index');
var transactions = require('./routes/transactions');

const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);
const app = express();

var Transaction = bookshelf.Model.extend({
  tableName: 'trans'
});

var Subcat = bookshelf.Model.extend({
  tableName = 'cat'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// basics
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('404. There\'s a mistake somewhere.');
  err.status = 404;
  next(err);
});

// working with knex
app.get('/categories/:category', (req, res) => {
  console.log(req.params.cat_id);
  knex('cat').where('category', req.params.category).then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
    });
});

knex.select('*').from('cat').then((values) => {
  console.log(values);
}).catch((err) => {
  console.error(err);
}).finally(() => {
  knex.destroy();
});

app.post('/categories', (req, res) => {
    knex('cat').insert({
      parent_subclass: req.body.parent_subclass
    })
  .catch((err) => {
    console.error(err);
  })
});

app.delete('/categories/:category', ( req, res ) => {
  console.log(req.params.category);
  knex('cat').delete("id", req.params.category).delete().then(() => {
    res.json('Deleted!');
  })
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
