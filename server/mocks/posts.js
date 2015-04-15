module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var postFixtures =  [
      {
        id: 'post1',
        body: "Body of post 1",
        author: "007",
        creationDate: new Date("2015-01-20")
      },
      {
        id: 'post2',
        body: "Body of post 2",
        author: "008",
        creationDate: new Date("2015-01-30")
      },
      {
        id: 'post3',
        body: "Body of post 3",
        author: "007",
        creationDate: new Date("2015-01-27")
      }
    ]


  function findPostFixtureById(id) {
    return postFixtures.filterBy(function(id) {
      return user.id === id;
    })[0];
  }

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': postFixtures
    });
  });
  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    console.log(req.params.id)
    res.send({
      'posts': {
        'post': findPostFixtureById(req.params.id)
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
