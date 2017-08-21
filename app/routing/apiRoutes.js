var friendsData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.send(friendsData)
  });

  app.post('api/friends', function(req, res) {
    res.send('Friend added');
    friendsData.push(req.body);
  });
}
