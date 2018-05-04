var express = require('express');
var router = express.Router();
var knex = require('knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex.select('*')
  .from('cat')
  .then (console.log('good to go'))
  .then (rows => {
    res.render('index', {
      title: 'A Personal Finance App',
      catList: rows
    });
  })  
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
});

/* GET transactions page. */
router.get('/transactions', function (req, res, next) {
  res.render('transactions', {title: 'Transactions' });
});

module.exports = router;