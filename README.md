# Instill Learning
apache-cordova-training

# Ex1-Cordova-Clock-Display
To run Ex1-Cordova-Clock-Display, use below command:
```
$ cordova platform add android
$ cordova run android
```


# Ex2-Cordova-Device-Info-Plugin
To run Ex2-Cordova-Device-Info-Plugin, use below command:
```
$ cordova platform add android
$ cordova run android
```

# Ex3-Cordova-InAppBrowser-Plugin

# Ex4-Cordova-Geo-Location-Plugin

# Ex5-Cordova-Fetch-API

# Ex6-Cordova-Custom-Plugin-1

# Ex7-Cordova-Custom-Plugin-2

# Ex8-Cordova-Offline-Storage

# Ex9-Cordova-Angular-Ionic5-1

# Ex9-Cordova-Angular-Ionic5-2

# Ex11-Cordova-SAP-UI5

# Ex12-Cordova-IBM-MobileFirst-8









## --------------------------------------
## Create a cordova app
cordova create [project_name] [package_name] [app_name]
[project_name]:     ex1-cordova-question-answer
[package_name]:     dev.instilllearning.ex1
[App Name]:         Ex1-Cordova-Question-Answer

Example:
$ cordova create ex1-cordova-question-answer dev.instilllearning.ex1 Ex1-Cordova-Question-Answer

## Move to cordova project and open project in Visual Studio Code
$ cd ex1-cordova-question-answer
$ code .

## Add cordova platfrom
$ cordova platform add android
$ cordova platform add ios

## Check the cordova requirements
$ cordova requirements

## Ganerate Android APK
$ cordova build android

## xcode - Installing the Requirements (for Mac)
$ xcode-select --install

## Deployment Tools allow you to launch iOS apps on an iOS Device from the command-line.
$ brew install ios-deploy

## CocoaPods tools is needed to build iOS apps.
$ sudo gem install cocoapods

## Deploying to Simulator - Open ios project in XCode
open ./platforms/ios/ProjectName.xcworkspace/
for example,

$ open ./platforms/ios/Ex1-Cordova-Question-Answer.xcworkspace

## Select the intended device from the toolbar's Scheme menu

## Press the Run button in the same toolbar to the left of the Scheme. A separate simulator application opens to display the app.

## Modify Code and Distribute to all platform
$ cordova prepare

## Now stop and run again the iphone app from the toolbar of xcode

