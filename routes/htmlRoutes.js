//var db = require("../models");

module.exports = function(app) {
  //Displays the home page
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

  //Update a Tutor Post Page
  app.get("/posts/update/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(postInfo) {
      res.render("update", {
        postInfo: postInfo
      });
    });
  });

  //TODO: Update a Review by Student
  //If we agree adding this I will add it
  //app.get(/review/update/:id, function(req, res) {
  //  db.Example.findOne({
  //})
  //})

  app.get("*", function(req, res) {
    res.render("404");
  });
};
