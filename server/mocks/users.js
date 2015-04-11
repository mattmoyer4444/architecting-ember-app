module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': [
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
      ]
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
