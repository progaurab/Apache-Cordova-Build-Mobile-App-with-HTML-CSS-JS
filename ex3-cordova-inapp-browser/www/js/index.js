document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    cordova.InAppBrowser.open('https://instilllearning.dev', '_blank', 'location=no, zoom=no, toolbar=no');
}