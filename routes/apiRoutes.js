var db = require("../models");

module.exports = function(app) {
  //Return all Tutor Posts
  app.get("/api/posts", function(req, res) {
    db.Example.findAll({}).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  //Return all the Student Reviews
  app.get("/api/reviews", function(req, res) {
    db.Example.findAll({}).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  //Return all student reviews specifically for a Tutor Post
  app.get("/api/reviews/:id", function(req, res) {
    db.Example.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  //Return all Subjects, this should be used in create a post dropdown list
  app.get("/api/subjects", function(req, res) {
    db.Example.findAll({}).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  //Create a new Post
  app.post("/api/post", function(req, res) {
    db.Example.create(req.body).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200).end();
      }
    });
  });

  //Create a new Post
  app.post("/api/review", function(req, res) {
    db.Example.create(req.body).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200).end();
      }
    });
  });
};
