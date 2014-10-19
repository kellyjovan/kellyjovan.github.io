var map;
var markers = [];

//Flickr Api

$(document).ready(function(){
    $("#btnSearch").click(function(){
        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1e9ca4287cf30cf0fff691d5970fdd21&tags="+$("#Search").val()+"&has_geo=1&extras=geo&format=json&jsoncallback=?", processResponse);
    });
    
    
    // function getPicName(picName){
    //     txtHold = picName;
    //     console.log(txtHold);
    //     console.log(picName);
    //     console.log
    // }
    
//     function getPicName(searchValue){
//     var txtHold = $("#Search").val();
//     console.log(txtHold);
// }
    google.maps.Marker.prototype.attachInfoWindow = function (options){
  var map_ = this.getMap();
  map_.bubble_ = map_.bubble_ || new google.maps.InfoWindow();
  google.maps.event.addListener(this, 'click', function () {
    map_.bubble_.setOptions(options);
    map_.bubble_.open(map_, this);
  });
  map_.infoWindowClickShutter = map_.infoWindowClickShutter || 
  google.maps.event.addListener(map_, 'click', function () {
    map_.bubble_.close();
  });
}

google.maps.Map.prototype.accessInfoWindow = function (){
  this.bubble_ = this.bubble_ || new google.maps.InfoWindow();
  return this.bubble_;
}


    
    function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(40, -100),
          zoom: 4
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        
      }
      
    google.maps.event.addDomListener(window, 'load', initialize)
      
});
    
    function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
function clearMarkers() {
  setAllMap(null);
}
function deleteMarkers() {
  clearMarkers();
} 

function processResponse(data){  
    deleteMarkers();
    $.each(data.photos.photo, function(i, item){
        //console.log(item);
        var farm = item.farm;
        var server = item.server;
        var id = item.id;
        var secret = item.secret;
        var photoUrl = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
        console.log(photoUrl);
        var title = item.title;
        
        // pic location
        var picLat = item.latitude;
        var picLong = item.longitude;
        var Latlng = new google.maps.LatLng(picLat, picLong);
        
        var marker = new google.maps.Marker({
            position: Latlng,
            map: map,
            draggable:false,
            title: title
        });
        markers.push(marker);
        
        
  google.maps.event.addListener(marker, 'click', function() {
        
        var infowindow = new google.maps.InfoWindow({
            maxWidth: 200,
        });
    infowindow.open(map,marker);
    marker.attachInfoWindow({content:'<div><div id="InfoTitle"><p><strong>'+title+'</strong></p></div><img id="Picture" src="'+photoUrl+'"/><br><p>Latitude: '+ picLat+ '<br><p>Longitude: '+picLong+'</div>'});
  });

    });
    

}


