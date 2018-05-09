var express = require('express');
var router = express.Router();
var knex = require('knex');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {title: 'A Personal Finance App' });
});

/* GET transactions page. */
router.get('/transactions', function (req, res, next) {
  res.render('transactions', {title: 'Transactions' });
});

/* GET categories page. */
router.get('/categories', function (req, res, next) {
  res.render('categories', {title: 'Categories' });
});

module.exports = router;


// old attempts at controllers + modularized routes, keeping it simple for now

// function getCategory(req, res) {
//   select().table('cat')
//   .then( cat => res.send( cat.row ));
// };

// function getCategories(req, res) {
//   knex.select()
//   .from('cat')
//   .where('id', req.params.id)
//   .then(() => {
//     select()
//     .from('cat')
//     .then( cats => res.send( cats.row ));
//   });
// };

// function addCategory(req, res) {
//   knex('cat').insert({
//     id: req.body.id,
//     class: req.body.class,
//     subclass: req.body.subclass,
//     cat: req.body.cat,
//     subcat: req.body.subcat
//   })
//   .then(() => {
//     select()
//     .from('cat')
//     .then( cats => res.send( cats.row ));
//   })
// };

// function updateCategory(req, res) {
//   knex('cat').where('id', req.params.id)
//   .update({
//     id: req.body.id,
//     class: req.body.class,
//     subclass: req.body.subclass,
//     cat: req.body.cat,
//     subcat: req.body.subcat
//   })
//   .then(() => {
//     select()
//     .from('cat')
//     .then( cats => res.send( cats.row ));
//   });
// };

// function deleteCategory(req, res) {
//   knex('cat').where('id', req.params.id)
//   .del()
//   .then(() => {
//     select()
//     .from('cat')
//     .then( cats => res.send( cats.row ));
//   });
// };