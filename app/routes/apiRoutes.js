var friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
   var bestMatch = {
       name: "",
       photo: "",
       friendDifference: 1000
   };

   console.log(req.body);

   var userData = req.body;
   var userScores = userData.scores;

   console.log(userScores);

   var totalDifference = 0;

   for (var i = 0; i < friends.length; i++) {

    console.log(friends[i]);
       totalDifference = 0;

    for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
    
        if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
        }
    }
   }

   friends.push(userData);

   res.json(bestMatch);
});
}