var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var queryString = 'SELECT * FROM messages';
      var dataReturn = models.messages.get(queryString);
      res.on('end', function(dataReturn) {
        return dataReturn;
      });
     // From request get the parameteres of the get resquest ex: var requestParameter = request for all messages
     //var returnData =  models.messages.get(requestParameter);
     // res.on('end', function (data) {
      //return data
     // })
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

// module.exports.messages.get();