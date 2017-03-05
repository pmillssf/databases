var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
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

