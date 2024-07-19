## Learn Apache Cordova - Build Mobile Apps for Android & iOS
This is the repository for the course "Learn Apache Cordova - Build Mobile Apps for Android & iOS" available on Instill Learning and Udemy. 

The full course is available from 
- [Udemy](https://www.udemy.com/course/draft/6068183/?referralCode=2F36C29350E4E5A09405) - Video Course
- [Instill Learning](https://www.instilllearning.com/courses/apache-cordova) - Live Training + Video Course + Hands-on Real World Projects
![Apache Cordova](https://img-c.udemycdn.com/course/750x422/3563971_a3d6_3.jpg)

## What is Apache Cordova? 
Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies such as HTML5, CSS3, and JavaScript for cross-platform development, avoiding each mobile platform's native development language. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's sensors, data, and network status."

## Learning Objectives
* How to create and build (compile and package) a Cordova project using the CLI (Command Line Interface).
* How to use several Cordova APIs such as Geolocation, Contacts, and Camera.
* How to handle specific mobile challenges such as touch events, scrolling, styling, page transitions, etc.
* To publish the app on Google Play Store & App Store

## Software - version[ Last Updated on 18 July 2024]:
* [Node - v22.5.0](https://nodejs.org/en/download/package-manager) 
* npm - 10.8.2 
* [JDK - Microsoft Build of OpenJDK 11.0.23 LTS](https://learn.microsoft.com/en-in/java/openjdk/download#openjdk-11)
* Apache cordova - 11.0.0
* cordova-android - 10.1.1
* cordova-ios - 6.2.0
* Gradle - 7.4

##  Hands-on Real World Projects:
* cordova create ex1 com.instilllearning.cordova.ex1 ilHelloWorld 

## Instructions
This repository has only master branch containing all examples. You can clone the repository and go to individual example's root folder and run it. 
To run Ex1-Cordova-Clock-Display, use below command:
```
$ git clone https://github.com/progaurab/apache-cordova-training
$ cd apache-cordova-training
$ cd Ex1-Cordova-Clock-Display
$ cordova platform add android
$ cordova run android
```
## Other usefull commands
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

## Instructor
[Gaurab Kumar](https://www.linkedin.com/in/progaurab)

## Course Offer
Use this link to get upto 95% discount on my courses on [Udemy](https://www.udemy.com/user/gaurab-kumar-2/):
***Purchases any two courses and get other courses free***, To get free courses coupon write mail to [courses@instilllearning.com](courses@instilllearning.com)
* [Learn Apache Cordova - Build Mobile Apps for Android & iOS](https://www.udemy.com/course/draft/6068183/?referralCode=2F36C29350E4E5A09405)


