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
      "<h3 class='col s9'>Title: " + data[i].title + "</h3>"
    );

    $("#tutorPost-" + i).append(
      "<h4 class='col s3'>$:" + data[i].hourlyRate + "</h4>"
    );
  }
});
