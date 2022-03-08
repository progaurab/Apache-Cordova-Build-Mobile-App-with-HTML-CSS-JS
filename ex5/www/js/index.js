document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

    function checkConnection() {
        var networkState = navigator.connection.type;
        if (networkState !== Connection.NONE) {
            alert("You are connected to Internet");
        } else {
            alert("You are Offline");
        }
        
        document.getElementById("ConnectionType").innerHTML = networkState
        document.getElementById("UNKNOWN").innerHTML = Connection.UNKNOWN
        document.getElementById("ETHERNET").innerHTML = Connection.ETHERNET
        document.getElementById("WIFI").innerHTML = Connection.WIFI
        document.getElementById("CELL_2G").innerHTML = Connection.CELL_2G
        document.getElementById("CELL_3G").innerHTML = Connection.CELL_3G
        document.getElementById("CELL_4G").innerHTML = Connection.CELL_4G
        document.getElementById("CELL").innerHTML = Connection.CELL
        document.getElementById("aConnection").innerHTML = Connection.NONE
    }

    checkConnection();
}