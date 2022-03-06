# Apache Cordova -Build Mobile App using HTML CSS & JavaScript
This is the repository for the course "Apache Cordova - Build Hybrid Mobile App for Android & iOS" available on Instill Learning and Udemy. The full course is available from [Udemy](https://www.udemy.com/course/apache-cordova/?referralCode=7254ECD5F74969030BF2).

![Apache Cordova](https://img-c.udemycdn.com/course/750x422/3563971_a3d6_3.jpg)

What is Apache Cordova? 
Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies such as HTML5, CSS3, and JavaScript for cross-platform development, avoiding each mobile platform's native development language. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's sensors, data, and network status."

# Learning Objectives
* How to create and build (compile and package) a Cordova project using the CLI (Command Line Interface).
* How to use several Cordova APIs such as Geolocation, Contacts, and Camera.
* How to handle specific mobile challenges such as touch events, scrolling, styling, page transitions, etc.
* To publish the app on Google Play Store & App Store
* Learn basics of Ionic 5

# Software - version[ Last Updated on 06 March 2022]:
* Node - v16.14.0
* npm - 8.3.1 
* JDK - openjdk version "11.0.12"
* Apache cordova - 11.0.0
* cordova-android - 10.1.1
* cordova-ios - 6.2.0
* Gradle - 7.4

# Exerices:
* cordova create ex1 dev.instilllearning.cordova.ex1 ilHelloWorld 
* cordova create ex2 dev.instilllearning.cordova.ex2 ilDigitalClock
* cordova create ex3 dev.instilllearning.cordova.ex3 ilAnalogClock 
* cordova create ex4 dev.instilllearning.cordova.ex4 ilDeviceInfo       
* cordova create ex5 dev.instilllearning.cordova.ex5 ilNetworkInfo
* cordova create ex6 dev.instilllearning.cordova.ex6 ilInAppBrowser
* cordova create ex7 dev.instilllearning.cordova.ex7 ilCameraPlugin
* cordova create ex8 dev.instilllearning.cordova.ex8 ilRESTApiUsingFetch
* cordova create ex9 dev.instilllearning.cordova.ex9 ilCustonPlugin1
* cordova create ex10 dev.instilllearning.cordova.ex10 ilCustonPlugin2

# Instructions
This repository has only master branch containing all examples. You can clone the repository and go to individual example's root folder and run it. 
To run Ex1-Cordova-Clock-Display, use below command:
```
$ git clone https://github.com/progaurab/apache-cordova-training
$ cd apache-cordova-training
$ cd Ex1-Cordova-Clock-Display
$ cordova platform add android
$ cordova run android
```
### Other usefull commands
Modify Code and Distribute to all platform
```
$ cordova prepare
```

Check the cordova requirements
``` 
$ cordova requirements
```

Ganerate Android APK
```
$ cordova build android
```

xcode - Installing the Requirements (for Mac)
```
$ xcode-select --install
```

Deployment Tools allow you to launch iOS apps on an iOS Device from the command-line.
```
$ brew install ios-deploy
```

CocoaPods tools is needed to build iOS apps.
```
$ sudo gem install cocoapods
```

Deploying to Simulator - Open ios project in XCode
open ./platforms/ios/ProjectName.xcworkspace/
for example,
```
$ open ./platforms/ios/Ex1-Cordova-Question-Answer.xcworkspace 
```
Create a new cordova app
cordova create [project_name] [package_name] [app_name]
[project_name]:     ex1-cordova-question-answer
[package_name]:     dev.instilllearning.ex1
[App Name]:         Ex1-Cordova-Question-Answer

```
$ cordova create ex1-cordova-question-answer dev.instilllearning.ex1 Ex1-Cordova-Question-Answer
```

# Instructor
[Gaurab Kumar](https://www.linkedin.com/in/progaurab)

# Offer
Use this link to get upto 95% discount on my courses on [Udemy](https://www.udemy.com/user/gaurab-kumar-2/):
***Purchases any two courses and get other courses free***, To get free courses coupon write mail to [courses@instilllearning.dev](courses@instilllearning.dev)
* [Apache Cordova - Build Hybrid Mobile App for Android & iOS](https://www.udemy.com/course/apache-cordova/?referralCode=7254ECD5F74969030BF2)
* Vue 3 Mastery - Router, Vuex, Composition API, Unit Testing (Upcoming)
* Ionic Angular - Build Android, iOS & PWA Apps with Ionic 5 (Upcoming)
* Ionic Vue - Build Android, iOS & PWA Apps with Ionic 5 (Upcoming)
* Ionic React - Build Android, iOS & PWA Apps with Ionic 5 (Upcoming)
* Modern JavaScript: ES6,ES7, ES8 and beyond (Upcoming)

