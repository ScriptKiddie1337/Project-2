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
    //var anchor = $("<a>");
    //anchor.attr("href", "/posts/" + (i + 1));
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "tutorPost-" + i);
    //anchor.append(wellSection);
    //$("#eachPost").append(anchor);
    $("#eachPost").append(wellSection);

    $("#tutorPost-" + i).append(
      "<div class='card-panel teal lighten-3 row white-text tutorPreviewMargin'><div class='valign-wrapper preview-inner-top'><h4 class='col s9'><i class='fas fa-file-signature'></i> " +
        data[i].title +
        "</h4><h5 class='col s3'><i class='fas fa-dollar-sign'></i>&nbsp" +
        data[i].hourlyRate +
        "&nbsp<i class='fas fa-credit-card'></i></h5></div><div class='row center'><div class='col s12'><a class='indigo btn' href=/posts/" +
        data[i].id +
        ">Learn More</a><div class='col s6 left'><a class='red accent-3 btn' href=mailto:" +
        data[i].email +
        ">Book Appointment</a></div></div></div></div>"
    );
  }
});
