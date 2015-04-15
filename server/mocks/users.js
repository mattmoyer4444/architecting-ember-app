module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var userFixtures = [
    {
      id: '007',
      name: 'James Bond',
      email: 'james@bond.com',
      followers: ['008'],
      posts: ['post1', 'post3']
    },
    {
      id: '008',
      name: 'Liam Neeson',
      email: 'liam@neeson.com',
      following: ['007'],
      posts: ['post2']
    }
  ];

  function findUserFixtureById(id) {
    return userFixtures.filter(function(user) {
      return user.id === id;
    })[0];
  }

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': userFixtures
    });
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'user': findUserFixtureById(req.params.id)
    });
  });

  app.use('/api/users', usersRouter);
};
