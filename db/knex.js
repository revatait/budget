const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
  const knex = require('knex')(config);

module.exports = {};



// https://www.youtube.com/watch?v=s1HBlL_DY5k&list=PL7sCSgsRZ-smZUBYMHByVhjO_XDPaX7QK&index=4
// he creates tables using knex (within db/migrations) rather than in mysql
// knex apparently has a "migration" functionality where you can create tables/db schema within knex, in javascript
// but i'm content learning mysql deeper
