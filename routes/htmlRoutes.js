var db = require("../models");

module.exports = function(app) {
  //Displays the home page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/index", function(req, res) {
    res.render("index");
  });

  //Displays the Tutor Portal
  app.get("/tutors", function(req, res) {
    res.render("tutors");
  });

  //Displays the Student Portal
  app.get("/students", function(req, res) {
    res.render("students");
  });

  //Displays the Tutor Post Details Page
  app.get("/posts/:id", function(req, res) {
    db.TutorPosts.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Reviews]
    }).then(function(tutorInfo) {
      res.render("details", {
        tutorInfo: tutorInfo
      });
    });
  });

  //Update a Tutor Post Page
  app.get("/posts/update/:id", function(req, res) {
    db.TutorPosts.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(postInfo) {
      res.render("update", {
        postInfo: postInfo
      });
    });
  });

  //Update a Student's Review Post Page
  app.get("/reviews/update/:id", function(req, res) {
    db.Reviews.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(reviewInfo) {
      res.render("reviewUpdate", {
        reviewInfo: reviewInfo
      });
    });
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
