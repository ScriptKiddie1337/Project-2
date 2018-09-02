$(document).ready(function() {
  var url = window.location.pathname;
  console.log(url);
  postId = url.split("posts/")[1];
  console.log(postId);
  getPostData(postId);

  function getPostData(id) {
    $.get("/api/posts/" + id, function(data) {
      console.log(data);
      $(".tutor-pic").attr("src", data.imageURL);
      $(".tutorName").html(" " + data.firstName + " " + data.lastName);
      $(".venmoDollars").html(" " + data.hourlyRate);
      $(".venmoName").html("Venmo: @" + data.venmoName);
      $("#postDescription").html(data.description);
    });
  }
});
