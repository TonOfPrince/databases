var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'chat'
});

connection.connect();


exports.get = function(table, queryString, cb){
  if(!queryString){
    queryString = '';
  };
  queryString = 'SELECT * FROM ' + table + ' ' + queryString + ' ' +';';
  connection.query(queryString, cb);

};
exports.set = function(table, queryString, cb){
  queryString = 'INSERT INTO ' + table + ' ' + queryString + ' ' +';';
  connection.query(queryString, cb);
};

// exports.get('messages', '', function(err, row){
//   console.log(err, row);
// });

// exports.set('messages', '(user, room, text, date) values ("john","room 8", "Hello there!",'+ new Date().getTime().toString()+ ')', function(err, row){
//   console.log(err, row);
// });

// connection.end();
