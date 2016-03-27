$(document).ready(function(){

// creates user list in HTML
createList(userIndex);

// click even for drawAllUsers
$('#all-users').on("click", function(){
  drawAllUsers(userIndex);
  $("#story").empty();
});

// click event to draw each user
$('#user_list > ul > li').on("click", function(){
  var id = $(this).attr("id")
  userIndex.forEach(function(user, index){
    if (user.id == id){
      drawOneUser(user);
      $("#story").html("<div class='story-style col-sm-3'><blockquote><img class='thumbnail' src='" + user.image + "' alt=''><p>" + user.storyText + "</p></blockquote></div>");
      }; // if
    }); // .forEach
});


}); // .ready()
