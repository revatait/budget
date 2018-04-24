var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'A Personal Finance App' });
});

/* GET categories page. */
router.get('/categories', function (req, res, next) {
  res.render('categories', {title: 'Categories' });
});

/* GET transactions page. */
router.get('/transactions', function (req, res, next) {
  res.render('transactions', {title: 'Transactions' });
});




/*

Routes needed:
accounts, balances, classes, subclasses, categories, subcategories

*/

module.exports = router;
