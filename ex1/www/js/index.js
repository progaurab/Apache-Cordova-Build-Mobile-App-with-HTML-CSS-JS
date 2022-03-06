document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Hello World!');
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
