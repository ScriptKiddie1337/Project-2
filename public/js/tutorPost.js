$("#postSubmit").on("click", function(event) {
  event.preventDefault();

  var newPost = {
    imageURL: $("#tutor_url")
      .val()
      .trim(),
    firstName: $("#tutor_first_name")
      .val()
      .trim(),
    lastName: $("#tutor_last_name")
      .val()
      .trim(),
    email: $("#tutor_email")
      .val()
      .trim(),
    subject: $("#subject").val(),
    venmoName: $("#venmo")
      .val()
      .trim(),
    hourlyRate: parseFloat($("#price").val()),
    description: $("#jobDescription")
      .val()
      .trim()
  };
  console.log(newPost);
  $.post("/api/post", newPost).then(function(data) {
    console.log(data);
  });

  $("#tutor_url").val("");
  $("#tutor_first_name").val("");
  $("#tutor_last_name").val("");
  $("#tutor_email").val("");
  $("#subject").val("");
  $("#venmo").val("");
  $("#price").val("");
  $("#jobDescription").val("");
});
