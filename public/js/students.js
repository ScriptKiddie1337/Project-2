$.get("/api/posts", function(data) {
  console.log(data);
  // Creates a div & col to use the grid system
  var eachPost = $("<div>")
    .addClass("col s12")
    .attr("id", "eachPost");
  $("#tutorPreview").append(eachPost);
  // Loops thru each tutor post and appends
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].title);
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "tutorPost-" + i);
    $("#eachPost").append(wellSection);

    $("#tutorPost-" + i).append(
      "<div class='card-panel teal lighten-3 row white-text tutorPreviewMargin'><h3 class='col s9 drop-shadow'>Title: " +
        data[i].title +
        "</h3><h4 class='col s3 drop-shadow'>$: " +
        data[i].hourlyRate +
        "</h4><div class='row center'><div class='col s12'><a class='orange btn' href='mailto:Test@gmail.com'>Learn More</a><div class='col s6 left'><a class='orange btn' href='mailto:Test@gmail.com'>Book Appointment</a></div></div></div></div>"
    );
  }
});
