var knex = require('../db/knex');

function getCategories(req, res) {
  knex.select().table('cat')
  .then( cat => res.send( cat.row ));
};

function getCategory(req, res) {
  knex.select()
  .from('cat')
  .where('id', req.params.id)
  .then(() => {
    knex.select()
    .from('cat')
    .then( cats => res.send( cats.row ));
  });
};

function addCategory(req, res) {
  knex('cat').insert({
    id: req.body.id,
    class: req.body.class,
    subclass: req.body.subclass,
    cat: req.body.cat,
    subcat: req.body.subcat
  })
  .then(() => {
    knex.select()
    .from('cat')
    .then( cats => res.send( cats.row ));
  })
};

function updateCategory(req, res) {
  knex('cat').where('id', req.params.id)
  .update({
    id: req.body.id,
    class: req.body.class,
    subclass: req.body.subclass,
    cat: req.body.cat,
    subcat: req.body.subcat
  })
  .then(() => {
    knex.select()
    .from('cat')
    .then( cats => res.send( cats.row ));
  });
};

function deleteCategory(req, res) {
  knex('cat').where('id', req.params.id)
  .del()
  .then(() => {
    knex.select()
    .from('cat')
    .then( cats => res.send( cats.row ));
  });
};

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory
};

// he mentioned a playlist dedicated to knex routing
// https://www.youtube.com/watch?v=xtnT5tSTBVY&list=PL7sCSgsRZ-smZUBYMHByVhjO_XDPaX7QK&index=5
