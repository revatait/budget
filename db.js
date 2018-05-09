const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCat: getCat,
  getCats: getCats
}

function getCats (testConn) {
  const conn = testConn || connection
  return conn('cat').select()
}

function getCat (id, testConn) {
  const conn = testConn || connection
  return conn('cat').where('id', id).first()
}