var db = require("../models");

module.exports = function(app) {
  //Return all Tutor Posts
  app.get("/api/posts", function(req, res) {
    db.TutorPosts.findAll({}).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  //Return all the Student Reviews
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({}).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  //Return all student reviews specifically for a Tutor Post
  app.get("/api/reviews/:id", function(req, res) {
    db.Reviews.findAll({
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
    db.Subjects.findAll({}).then(function(results) {
      res.status(200);
      res.json(results);
    });
  });

  /*
    Description: Create a new Post
    Parameter:
    Body: {
      imageURL: string,
      description: string,
      hourlyRate: double,
      email: string
    }
    Returns: Status of 200 on AffectedRows > 0
  */
  app.post("/api/post", function(req, res) {
    db.TutorPosts.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  /*
    Description: Create a new Review
    Parameter:
    Body: {
      author: string,
      rating: int,
      text: string,
      TutorPostId: int
    }
    Returns: Status of 200 on AffectedRows > 0
  */
  app.post("/api/review", function(req, res) {
    db.Reviews.create(req.body).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200).end();
      }
    });
  });
};
