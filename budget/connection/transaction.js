var connection = require('MySQLConnect');

function Transaction() {
  this.getAllUsers = function(res) {
    connection.init();
    connection.acquire(function(err, con) {
      con.query('SELECT DISTINCT * FROM cat', function (err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getTransactionById = function (id, res) {
    connection.init();
    connection.acquire(function (err, con) {
      var query = 
    })
  }

}
