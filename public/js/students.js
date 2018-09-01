$.get("/api/post", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "tutorPost-" + i);
    $("#tutorPreview").append(wellSection);
  }
});
