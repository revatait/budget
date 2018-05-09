var express = require('express');
var router = express.Router();
var knex = require('knex');
var db = require('../db');

/* GET home page. */
router.get('/', (req, res) => {
  db.getCats()
    .then(cats => {
      res.render('index', {cats: cats, title: 'A Personal Finance App'})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

/* GET transactions page. */
router.get('/transactions', function (req, res, next) {
  res.render('transactions', {title: 'Transactions' });
});

/* GET categories page. */
router.get('/categories', function (req, res, next) {
  res.render('categories', {title: 'Categories' });
});

module.exports = router;