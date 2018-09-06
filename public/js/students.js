$(document).ready(function() {
  loadAllPosts();
  $.get("/api/subjects").then(function(data) {
    var subjects = [];
    for (var i = 0; i < data.length; i++) {
      subjects.push(data[i].subjectName.toUpperCase());
    }
    $("#submit-button").on("click", function(event) {
      event.preventDefault();
      var searchSubject = $("#search-name")
        .val()
        .toUpperCase();
      $("#search-name").val("");
      $("#eachPost").empty();
      $("#messageDisplay").empty();
      if (subjects.includes(searchSubject)) {
        $.get("/api/search/" + searchSubject, function(data) {
          // Creates a div & col to use the grid system
          var eachPost = $("<div>")
            .addClass("col s12")
            .attr("id", "eachPost");
          $("#tutorPreview").append(eachPost);
          // Checks if there is any tutor posts for this subject
          if (data.length === 0) {
            var message = $("<h4>")
              .addClass("col s12")
              .attr("id", "message")
              .text(
                "There is currently no tutor post for " +
                  searchSubject +
                  " subject."
              );
            $("#messageDisplay").append(message);
          } else {
            // Loops thru each tutor post and appends
            for (var i = 0; i < data.length; i++) {
              var anchor = $("<a>");
              anchor.attr("href", "/posts/" + (i + 1));
              var wellSection = $("<div>");
              wellSection.addClass("well");
              wellSection.attr("id", "tutorPost-" + i);
              anchor.append(wellSection);
              $("#eachPost").prepend(anchor);
              // $("#eachPost").append(wellSection);
              $("#tutorPost-" + i).append(
                "<div class='card-panel teal lighten-3 row white-text tutorPreviewMargin'><div class='col s12'><div class='row valign-wrapper teal'><h4 class='col s9'><i class='fas fa-chalkboard'></i> " +
                  data[i].title +
                  "</h4><h4 class='col s3'>$: " +
                  data[i].hourlyRate +
                  "</h4></div></div><div class='row center'><div class='col s6'><a class='red btn' href=/posts/" +
                  data[i].id +
                  ">Learn More</a></div><div class='col s6 left'><a class='red btn' href=mailto:" +
                  data[i].email +
                  "><i class='fas fa-calendar-check'></i> Book Appointment</a></div></div></div></div>"
              );
            }
          }
        });
      } else {
        if (!searchSubject) {
          var message = $("<h4>")
            .addClass("col s12")
            .attr("id", "message")
            .text(
              "Please enter a subject name in the search bar. All current offerings:"
            );
          $("#messageDisplay").append(message);
        } else {
          var message = $("<h4>")
            .addClass("col s12")
            .attr("id", "message")
            .text(
              "Sorry we do not have any " +
                searchSubject +
                " tutor at the moment. All current offerings:"
            );
          $("#messageDisplay").append(message);
        }
        $.get("/api/posts", function(data) {
          // Creates a div & col to use the grid system
          var eachPost = $("<div>")
            .addClass("col s12")
            .attr("id", "eachPost");
          $("#tutorPreview").append(eachPost);
          // Loops thru each tutor post and appends
          for (var i = 0; i < data.length; i++) {
            var anchor = $("<a>");
            anchor.attr("href", "/posts/" + (i + 1));
            var wellSection = $("<div>");
            wellSection.addClass("well");
            wellSection.attr("id", "tutorPost-" + i);
            anchor.append(wellSection);
            $("#eachPost").prepend(anchor);
            // $("#eachPost").append(wellSection);
            $("#tutorPost-" + i).append(
              "<div class='card-panel teal lighten-3 row white-text tutorPreviewMargin'><div class='col s12'><div class='row valign-wrapper teal'><h4 class='col s9'><i class='fas fa-chalkboard'></i> " +
                data[i].title +
                "</h4><h4 class='col s3'>$: " +
                data[i].hourlyRate +
                "</h4></div></div><div class='row center'><div class='col s6'><a class='red btn' href=/posts/" +
                data[i].id +
                ">Learn More</a></div><div class='col s6 left'><a class='red btn' href=mailto:" +
                data[i].email +
                "><i class='fas fa-calendar-check'></i> Book Appointment</a></div></div></div></div>"
            );
          }
        });
      }
    });
    // When subject buttons are clicked
    $(".subjectBtn").on("click", function() {
      var searchSubject = $(this)[0].name.toUpperCase();
      //console.log(searchSubject);
      $("#eachPost").empty();
      $("#messageDisplay").empty();
      if (subjects.includes(searchSubject)) {
        $.get("/api/search/" + searchSubject, function(data) {
          // Creates a div & col to use the grid system
          var eachPost = $("<div>")
            .addClass("col s12")
            .attr("id", "eachPost");
          $("#tutorPreview").append(eachPost);
          // Checks if there is any tutor posts for this subject
          if (data.length === 0) {
            var message = $("<h4>")
              .addClass("col s12")
              .attr("id", "message")
              .text(
                "There is currently no tutor post for " +
                  searchSubject +
                  " subject."
              );
            $("#messageDisplay").append(message);
          } else {
            // Loops thru each tutor post and appends
            for (var i = 0; i < data.length; i++) {
              var anchor = $("<a>");
              anchor.attr("href", "/posts/" + (i + 1));
              var wellSection = $("<div>");
              wellSection.addClass("well");
              wellSection.attr("id", "tutorPost-" + i);
              anchor.append(wellSection);
              $("#eachPost").prepend(anchor);
              // $("#eachPost").append(wellSection);
              $("#tutorPost-" + i).append(
                "<div class='card-panel teal lighten-3 row white-text tutorPreviewMargin'><div class='col s12'><div class='row valign-wrapper teal'><h4 class='col s9'><i class='fas fa-chalkboard'></i> " +
                  data[i].title +
                  "</h4><h4 class='col s3'>$: " +
                  data[i].hourlyRate +
                  "</h4></div></div><div class='row center'><div class='col s6'><a class='red btn' href=/posts/" +
                  data[i].id +
                  ">Learn More</a></div><div class='col s6 left'><a class='red btn' href=mailto:" +
                  data[i].email +
                  "><i class='fas fa-calendar-check'></i> Book Appointment</a></div></div></div></div>"
              );
            }
          }
        });
      }
    });
  });
});

function loadAllPosts() {
  var message = $("<h4>")
    .addClass("col s12")
    .attr("id", "message")
    .text(
      "Please enter a subject name in the search bar. All current offerings:"
    );
  $("#messageDisplay").append(message);
  $.get("/api/posts", function(data) {
    // Creates a div & col to use the grid system
    var eachPost = $("<div>")
      .addClass("col s12")
      .attr("id", "eachPost");
    $("#tutorPreview").append(eachPost);
    // Loops thru each tutor post and appends
    for (var i = 0; i < data.length; i++) {
      var anchor = $("<a>");
      anchor.attr("href", "/posts/" + (i + 1));
      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "tutorPost-" + i);
      anchor.append(wellSection);
      $("#eachPost").prepend(anchor);
      // $("#eachPost").append(wellSection);
      $("#tutorPost-" + i).append(
        "<div class='card-panel teal lighten-3 row white-text tutorPreviewMargin'><div class='col s12'><div class='row valign-wrapper teal'><h4 class='col s9'><i class='fas fa-chalkboard'></i> " +
          data[i].title +
          "</h4><h4 class='col s3'>$: " +
          data[i].hourlyRate +
          "</h4></div></div><div class='row center'><div class='col s6'><a class='red btn' href=/posts/" +
          data[i].id +
          ">Learn More</a></div><div class='col s6 left'><a class='red btn' href=mailto:" +
          data[i].email +
          "><i class='fas fa-calendar-check'></i> Book Appointment</a></div></div></div></div>"
      );
    }
  });
}
