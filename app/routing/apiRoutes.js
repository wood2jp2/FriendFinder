var friendsData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsData)
  });

  app.post('/api/friends', function(req, res) {

    // console.log(req.body); -- CHECK
    var pushedFriendScore = req.body.scores.reduce(function(sum, value) {
      return parseInt(sum) + parseInt(value);
    }, 0);

    var matchToBeat = 1000;

    for (let i = 0; i < friendsData.length; i++) {

      var currentFriendScore = friendsData[i].scores.reduce(function(sum, value) {
        return parseInt(sum) + parseInt(value);
      }, 0);

      // console.log(currentFriendScore); -- CHECK

      var currentDifference = Math.abs(currentFriendScore - pushedFriendScore);

      // console.log(difference); -- CHECK

      if (currentDifference < matchToBeat) {
        matchToBeat = currentDifference;
        var bestMatch = friendsData[i];
        // console.log(matchToBeat); -- CHECK
      };
    };

    // console.log(bestMatch); -- CHECK

    friendsData.push(req.body);

    res.send(bestMatch);

  });
}
