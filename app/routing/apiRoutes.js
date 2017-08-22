var friendsData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendsData)
  });

  app.post('/api/friends', function(req, res) {

    var bestMatch;
    console.log(req.body);
    var pushedFriendScore = req.body.scores.reduce(function(sum, value) {
      return sum + value;
    }, req.body.scores[0]);

    var matchToBeat;
    for (let i = 0; i < friendsData.length; i++) {

      var currentFriendScore = friendsData[i].scores.reduce(function(sum, value) {
        return sum + value;
      }, friendsData[i].scores[0]);

      var difference = Math.abs(currentFriendScore - pushedFriendScore);

      if (matchToBeat === 'undefined' || difference < matchToBeat) {
        matchToBeat = difference;
        bestMatch = friendsData[i];
      }
    };

    friendsData.push(req.body);

    res.json(bestMatch);
  });
}
