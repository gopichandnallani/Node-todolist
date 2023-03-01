var mysql = require('mysql2');

var con = mysql.createConnection({
  host     : 'ip-10-0-1-158.ec2.internal',
  user     : 'gopichand',
  password : process.env.DB_PASS,
  database : 'tododb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = con;