var mysql = require('mysql');

function MySQLConnect() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'Lesjam3!!3sjus8tify',
      database: 'budget'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new MySQLConnect;
