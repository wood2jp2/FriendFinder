// requiring the friends data I have manually populated
var friendsData = require('../data/friends');

module.exports = function(app) {

  // using a GET express route to pull down the exported manually populated friends data from file
  app.get('/api/friends', function(req, res) {
    res.json(friendsData)
  });

  // using POST route to grab newFriend request from post route on HTML page, also sends back bestFriend match
  app.post('/api/friends', function(req, res) {

    // using a reduce function to sum uup newFriend's quiz scores
    var pushedFriendScore = req.body.scores.reduce(function(sum, value) {
      return parseInt(sum) + parseInt(value);
    }, 0);

    // this will be re-set to current best friend match's score
    var matchToBeat = 1000;

    // looking thru the current friends data from friends.js
    for (let i = 0; i < friendsData.length; i++) {

      // same reduce fn
      var currentFriendScore = friendsData[i].scores.reduce(function(sum, value) {
        return parseInt(sum) + parseInt(value);
      }, 0);

      // finding the difference in absolute value
      var currentDifference = Math.abs(currentFriendScore - pushedFriendScore);

      // tests if the friend this is currently looping thru is a better match based off difference
      if (currentDifference < matchToBeat) {
        // if so, add that current difference as the one to beat
        matchToBeat = currentDifference;
        // best match would be then the current user
        var bestMatch = friendsData[i];
      };
    };

    // posts it to page's friends
    friendsData.push(req.body);
    // sending response back to post route
    res.send(bestMatch);

  });
}
