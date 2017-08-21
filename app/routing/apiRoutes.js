var friends = [{
  name: 'Josh',
  photo: 'google.com',
  scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}];

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.send(friends)
  });

  app.post('api/friends', function(req, res) {
    res.send('Friend added');
    friends.push(req.body);
  });
}
