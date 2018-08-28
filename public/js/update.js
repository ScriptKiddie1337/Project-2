$(document).ready(function() {
  function getPostData(id) {
    $.get("/api/update/" + id, function(data) {
      if (data) {
        $("#tutor-url").val(data.imageURL);
        $("#tutor_first_name").val(data.firstName);
        $("#tutor_last_name").val(data.lastName);
        $("#tutor_email").val(data.email);
        $("#subject").val(data.subject);
        $("#subject").val(data.venmoName);
        $("#price").val(data.hourlyRate);
        $("#job-description").val(data.description);
      }
    });
  }
});
