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

// draws on user using GMaps
var drawOneUser = function drawOneUser(user){
  map.removePolylines();
  map.drawRoute({
    origin: user.drawProps.origin,
    destination: user.drawProps.destination,
    strokeColor: user.drawProps.strokeColor
    }); // map.drawRoute()
}; // drawOneUser()

var drawAllUsers = function drawAllUsers(index){
  index.forEach(function(user){
    drawOneUser(user);
    }); // index.forEach()
  }; // drawAllUsers()

var createList = function(userArr){
    for (var i = 0; i < userArr.length; i++) {
    $("#user_list ul").append(
      "<li id='" + userArr[i].id + "' <\/li>" +
      "<a>" + userArr[i].name + "<\/a>" +
      "<\/li>"
      ); // .append
    }; // for loop
  }; // createList()
