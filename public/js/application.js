$(document).ready(function() {
  $("#generate_message_button").click(function(){
    $.get("/message", function(message) {
      $("#generated_message").append("<p>" + message + "</p>");
    })
  });
  
  $("#new_user_form").submit(function(event) {
    event.preventDefault();
    
    var form = $(this);
    var url = form.attr("action");
    var data = form.serialize();

    // {
    //   "user": {
    //     "id": 4,
    //     "screenname": "claymation"
    //   }
    // }
    $.post(url, data, function(user_object) {
      console.log(user_object);
      var message = "New User " + 
        user_object.user.screen_name
        + " has been created with id" +
        user_object.user.id;
      $("#generated_message").html(message);
    })
  })
});