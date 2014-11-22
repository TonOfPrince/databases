var models = require('../models');
var bluebird = require('bluebird');
var _ = require('underscore');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, rows) {
        if (err) {
          return res.send(404);
        }
        rows = _.map(rows, function(row) {
          row.text = row.text.toString();
          return row;
        });
        res.send(rows);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, rows) {
        if (err) {
          return res.send(404);
        }
        res.send(rows);

      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

