// setup knex
const env = 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

knex('budget.cat').then((result) => {
  console.log(result);
  knex.destroy();
})
.catch ((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
})

module.exports = knex;
