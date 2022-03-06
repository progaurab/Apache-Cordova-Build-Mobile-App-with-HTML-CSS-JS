document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    if(navigator.geolocation){
        console.log('Geolocation is there');
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById("latitude").innerHTML = position.coords.latitude;
            document.getElementById("longitude").innerHTML = position.coords.longitude;
            document.getElementById("altitude").innerHTML = position.coords.altitude;
            document.getElementById("latitude").innerHTML = position.coords.latitude;
            document.getElementById("accuracy").innerHTML = position.coords.accuracy;
            document.getElementById("altitudeAccuracy").innerHTML = position.coords.altitudeAccuracy;
            document.getElementById("heading").innerHTML = position.coords.heading;
            document.getElementById("speed").innerHTML = position.coords.speed;
            document.getElementById("timestamp").innerHTML = position.timestamp;
    
        } , function(error) {
          console.log('Error while connecting to geolocation ' + error);
        }, {timeout:10000});
      } else {
        console.log('Geolocation is not there');
      }
}