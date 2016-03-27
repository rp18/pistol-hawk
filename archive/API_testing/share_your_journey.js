$(document).ready(function(){

  var map = new GMaps({
    div: '#map',
    zoom: 8,
    lat: 26.280131, 
    lng: -81.033708
  });

  var userIndex = [];

  var user100 = {
    name: 'Jack Sparrow',
    id: '100',
    image: 'http:\/\/images6.fanpop.com\/image\/photos\/32900000\/A-sweet-smile-from-Jack-captain-jack-sparrow-32932711-512-424.jpg',
    drawProps: {
      origin: [26.738970, -81.470104],
      destination: [25.750886, -80.126959],
      travelMode: 'driving',
      strokeColor: 'green'
    },
    storyText: "Well, we anchored ship in Miami, but all the party people got on my nerves. So I decided to take my crew and trek them inland. We passed the Everglades and found a remote clearing. A perfect spot to temporarily hide my treasure. I mean, to not hide my treasure. Cuz I didn't hide any treasure there. But even if I did; I'd slit your throat if you touched it.",
    overlayText: [{
      lat: 26.239111, 
      lng: -80.481194,
      content: '<div class="overlay">Stopped to pee.</div>'
    },
    {
      lat: 27.059008, 
      lng: -81.437004,
      content: '<div class="overlay">Miami, baby!!!.</div>'
    }] // overlay array
  };

  var user101 = {
    name: 'Redbeard',
    id: '101',
    image: "http:\/\/www.micksmtn.20m.com\/1969ep14pic2.jpg",
    drawProps: {
      origin: [25.934843, -81.291886],
      destination: [26.612117, -80.421220],
      travelMode: 'driving',
      strokeColor: 'red'
    },
    storyText: "After three straight weeks of drinking rum and partying at West Palm Beach, we decided to trek back to our ship on the other side of the peninsula, but we got stuck in the swamps. We now need help. Really, this isn't a journal entry. Somebody please send help.",
    overlayText: []
  };

  userIndex.push(user100);
  userIndex.push(user101);

  var drawAllUsers = function drawAllUsers(index){
    index.forEach(function(user){
      map.drawRoute({
        origin: user.drawProps.origin,
        destination: user.drawProps.destination,
        strokeColor: user.drawProps.strokeColor
        }); // map.drawRoute()
      }); // index.forEach()
    }; // drawAllUsers()

    var drawOneUser = function drawOneUser(user){
      // tofix: this map assignment method refreshes entire page. makes entire drawOneUser function annoying.
      // this map assignment is here to erase previous renderings. a bit crude.
      // map = GMaps({
      //   div: '#map',
      //   zoom: 8,
      //   lat: 26.280131, 
      //   lng: -81.033708
      // });
      // cerntainly simpler, but page-refresh problem remains.
      map.removePolylines();
      map.removeOverlays();
      map.drawRoute({
        origin: user.drawProps.origin,
        destination: user.drawProps.destination,
        strokeColor: user.drawProps.strokeColor
        }); // map.drawRoute()
      user.overlayText.forEach(function(key){
        map.drawOverlay(key);
      }); //
    }; // drawOneUser()


    for (var i = 0; i < userIndex.length; i++) {
      $("#user_list ul").append(
        "<li id='" + userIndex[i].id + "' <\/li>" +
        "<a>" + userIndex[i].name + "<\/a>" +
        "<\/li>"
        )
    };

  // list id functions 

    // $('#100').click(function() {
    //   drawOneUser(user100);
    //   $("#story").html("<div class='story-style'><p>" + user100.storyText + "</p></div>"); 
    // });

    // $('#101').click(function() {
    //   drawOneUser(user101);
    //   $("#story").html("<div class='story-style'><p>" + user101.storyText + "</p></div>"); 
    // });

    $('#all-users').on("click", function(){
      drawAllUsers(userIndex);
      $("#story").empty();
    });

    $('#user_list > ul > li').on("click", function(){
      var id = $(this).attr("id")
      userIndex.forEach(function(user, index){
        if (user.id == id){
          drawOneUser(user);
          $("#story").html("<div class='story-style col-sm-3'><blockquote><p>" + user.storyText + "</p></blockquote></div>");
          }; // if
        }); // .forEach
    });




}); // .ready()

