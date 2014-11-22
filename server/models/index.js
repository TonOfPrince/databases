var db = require('../db');
var must = require('Mustache');



module.exports = {
  messages: {
    get: function (callback) {db.get('messages', '', callback)}, // a function which produces all the messages
    post: function (messageObj, callback) {
      var queryTemplate = "(username, roomname, text, date) values ('{{username}}', '{{roomname}}','{{text}}'," + new Date().getTime().toString()+ ")";
      var queryString = must.render(queryTemplate, messageObj);
      db.set('messages', queryString, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// var testM = {
  // text: 'yolo',
  // room: 'swagonly',
//   user: 'chuck norris'
// };
// module.exports.messages.post(testM, function(err, row){
//   console.log(err, row);
//   module.exports.messages.get(function(err, row){
//     console.log(err, row);
//   });
// })

