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
    venmo: $("#venmo")
      .val()
      .trim(),
    price: $("#price")
      .val()
      .trim(),
    description: $("#jobDescription")
      .val()
      .trim()
  };
  console.log(newPost);
  $.post("/api/post", newPost).then(function(data) {
    console.log(data);
  });
});
