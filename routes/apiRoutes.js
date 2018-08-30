var db = require("../models");

module.exports = function(app) {
  //Return all Tutor Posts
  app.get("/api/posts", function(req, res) {
    db.TutorPosts.findAll({}).then(function(results) {
      res.status(200);
      res.json(results).end();
    });
  });

  //Return all the Student Reviews
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({}).then(function(results) {
      res.status(200);
      res.json(results).end();
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
      res.json(results).end();
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
    ** UPDATED -- 8/29/2018 **
    Description: Create a new Tutor Post
    Parameter:
    Body: {
      firstName: string, [required]
      lastName: string, [required]
      venmoName: string, [required]
      subject: string, [required]
      imageURL: string, [optional]
      description: string, [required]
      hourlyRate: decimal (ex. 3.00) [required],
      email: string [required]
    }
    Returns: Return Object Created on Status of 200
  */
  app.post("/api/post", function(req, res) {
    db.TutorPosts.create(req.body).then(function(data) {
      if (!data) {
        res.status(400).end();
      } else {
        res.status(200);
        res.json(data).end();
      }
    });
  });

  /*
    Description: Update a Tutor Post
    Parameter:
    Body: {
      firstName: string, [required]
      lastName: string, [required]
      venmoName: string, [required]
      subject: string, [required]
      imageURL: string, [optional]
      description: string, [required]
      hourlyRate: decimal (ex. 3.00) [required],
      email: string [required]
    }
    Returns: AffectedRows > 0 on Status 200
  */
  app.put("/api/post", function(req, res) {
    db.TutorPosts.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200);
        res.json(affectedRows).end();
      }
    });
  });

  /*
    Description: Delete a Tutor Post
    Parameter: id
    Returns: Return AffectedRows > 0 on Status of 200
  */
  app.delete("/api/post/:id", function(req, res) {
    db.TutorPosts.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200);
        res.json(affectedRows).end();
      }
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
    Returns: AffectedRows > 0 on Status of 200
  */
  app.post("/api/review", function(req, res) {
    db.Reviews.create(req.body).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200);
        res.json(affectedRows).end();
      }
    });
  });

  /*
    Description: Delete a Review
    Parameter: id
    Returns: AffectedRows > 0 on Status 200
  */
  app.delete("/api/review/:id", function(req, res) {
    db.Reviews.destroy(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(affectedRows) {
      if (affectedRows === 0) {
        res.status(400).end();
      } else {
        res.status(200);
        res.json(affectedRows).end();
      }
    });
  });
};
