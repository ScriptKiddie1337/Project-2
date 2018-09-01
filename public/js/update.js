$(document).ready(function() {
  var url = window.location.search;
  var postId;
  var updating = true;

  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  if (updating) {
    newPost.id = postId;
    updatePost(newPost);
  }

  function getPostData(id) {
    $.get("/api/update/" + id, function(data) {
      if (data) {
        $("#tutor-url").val(data.imageURL);
        $("#tutor_first_name").val(data.firstName);
        $("#tutor_last_name").val(data.lastName);
        $("#tutor_email").val(data.email);
        $("#subject").val(data.subject);
        $("#venmo").val(data.venmoName);
        $("#price").val(data.hourlyRate);
        $("#job-description").val(data.description);

        // updating = true;
      }
    });
  }

  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    }).then(function() {
      window.location.href = "/students";
    });
  }
});
