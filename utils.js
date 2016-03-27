var map = new GMaps({
  div: '#map',
  zoom: 8,
  lat: 26.280131,
  lng: -81.033708,
  mapTypeControlOptions: {
    position: google.maps.ControlPosition.BOTTOM_RIGHT
  },
  zoomControlOptions: {
    position: google.maps.ControlPosition.RIGHT_BOTTOM
  },
});

// map draw function for a user
var drawOneUser = function drawOneUser(user){
  map.removePolylines();
  map.drawRoute({
    origin: user.drawProps.origin,
    destination: user.drawProps.destination,
    strokeColor: user.drawProps.strokeColor
    }); // map.drawRoute()
}; // drawOneUser()

// map draw function for all users
var drawAllUsers = function drawAllUsers(index){
  index.forEach(function(user){
    drawOneUser(user);
    }); // index.forEach()
  }; // drawAllUsers()


// Creates user-list
var createList = function(users){
  for (var i = 0; i < users.length; i++) {
    $("#user_list ul").append(
      "<li id='" + users[i].id + "' <\/li>" +
      "<a>" + users[i].name + "<\/a>" +
      "<\/li>")
    }; // for loop
  }; // function expression
