var url = window.location.pathname;
postId = url.split("posts/")[1];

$("#reviewSubmit").on("click", function(event) {
  event.preventDefault();

  var newReview = {
    author: $("#reviewerNameInput")
      .val()
      .trim(),
    rating: $("#reviewerRatingInput").val(),
    text: $("#reviewerDescriptionInput").val(),
    TutorPostId: postId
  };

  $.post("/api/review", newReview).then(function(data) {
    console.log(data);
  });

  $("#reviewerNameInput").val("");
  $("#reviewerDescriptionInput").val("");
  $("#reviewerRatingInput").val("");
});
