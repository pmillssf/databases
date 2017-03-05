var db = require('../db');

module.exports = {
  messages: {
    get: function (queryString) {
      db.dbConnection.query('SELECT usernames.username, messages.text FROM messages, usernames WHERE usernames.username = "david bowie" AND usernames.id = messages.usernameId', [], function(err, results) {
        //RESULTS RETURNS '[ RowDataPacket { id: 1, usernameId: 1, text: 'CH CH CHC CHANGES', roomnameId: 1 } ]' 
        console.log('results: ', results[0]);
        console.log(results[0].text);
        console.log(results);
      });
      // db.dbConnection.query('SELECT * FROM messages', [], function(err, results) {
      //   //RESULTS RETURNS '[ RowDataPacket { id: 1, usernameId: 1, text: 'CH CH CHC CHANGES', roomnameId: 1 } ]' 
      //   console.log('results: ', results[0]);
      //   console.log(results[0].text);
      //   console.log(results);
      // });
    }, // a function which produces all the messages
    // takes a string as a querry
    // converts that string queery into a sql querry
    // returns result of that querry in an array of objects
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// module.exports.messages.get();         USED TO TEST FUNCTIONALITY