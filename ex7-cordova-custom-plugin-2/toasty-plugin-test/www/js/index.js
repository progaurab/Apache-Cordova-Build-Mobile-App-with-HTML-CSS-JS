// This state represents the state of our application and will be saved and
// restored by onResume() and onPause()
var appState = {
  takingPicture: true,
  imageUri: ""
};

var APP_STORAGE_KEY = "exampleAppState";

var app = {
  initialize: function() {
      this.bindEvents();
  },
  bindEvents: function() {
      // Here we register our callbacks for the lifecycle events we care about
      document.addEventListener('deviceready', this.onDeviceReady, false);
      document.addEventListener('pause', this.onPause, false);
      document.addEventListener('resume', this.onResume, false);
  },
  onDeviceReady: function() {
      document.getElementById("take-picture-button").addEventListener("click", function() {
          // Because the camera plugin method launches an external Activity,
          // there is a chance that our application will be killed before the
          // success or failure callbacks are called. See onPause() and
          // onResume() where we save and restore our state to handle this case
          appState.takingPicture = true;

          navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback,
              {
                  sourceType: Camera.PictureSourceType.CAMERA,
                  destinationType: Camera.DestinationType.FILE_URI,
                  targetWidth: 250,
                  targetHeight: 250
              }
          );
      });

      // Toasty Plugin
      // Cordova is now initialized. Have fun!
    window.plugins.toastyPlugin.show('It feels toasty in here!', 'long', function() {
      console.log('Excelsior!');
    }, function(err) {
      console.log('Uh oh... ' + err);
    });
  },
  onPause: function() {
      // Here, we check to see if we are in the middle of taking a picture. If
      // so, we want to save our state so that we can properly retrieve the
      // plugin result in onResume(). We also save if we have already fetched
      // an image URI
      if(appState.takingPicture || appState.imageUri) {
          window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
      }
  },
  onResume: function(event) {
      // Here we check for stored state and restore it if necessary. In your
      // application, it's up to you to keep track of where any pending plugin
      // results are coming from (i.e. what part of your code made the call)
      // and what arguments you provided to the plugin if relevant
      var storedState = window.localStorage.getItem(APP_STORAGE_KEY);

      if(storedState) {
          appState = JSON.parse(storedState);
      }

      // Check to see if we need to restore an image we took
      if(!appState.takingPicture && appState.imageUri) {
          document.getElementById("get-picture-result").src = appState.imageUri;
      }
      // Now we can check if there is a plugin result in the event object.
      // This requires cordova-android 5.1.0+
      else if(appState.takingPicture && event.pendingResult) {
          // Figure out whether or not the plugin call was successful and call
          // the relevant callback. For the camera plugin, "OK" means a
          // successful result and all other statuses mean error
          if(event.pendingResult.pluginStatus === "OK") {
              // The camera plugin places the same result in the resume object
              // as it passes to the success callback passed to getPicture(),
              // thus we can pass it to the same callback. Other plugins may
              // return something else. Consult the documentation for
              // whatever plugin you are using to learn how to interpret the
              // result field
              cameraSuccessCallback(event.pendingResult.result);
          } else {
              cameraFailureCallback(event.pendingResult.result);
          }
      }
  }
}

// Here are the callbacks we pass to getPicture()
function cameraSuccessCallback(imageUri) {
  appState.takingPicture = false;
  appState.imageUri = imageUri;
  document.getElementById("get-picture-result").src = imageUri;
}

function cameraFailureCallback(error) {
  appState.takingPicture = false;
  console.log(error);
}

app.initialize();