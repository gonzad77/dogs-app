# This is an Ionic 5 application 

How to make the app run on your phone?

You must have cordova and ionic installed.

    $ npm install -g cordova
    $ npm install -g ionic

Then we should install npm dependecies

    $ npm install


Add Platform (IOS or Android)

    $ ionic cordova platform add ios
    $ ionic cordova platform add android

Run app on device

    $ ionic cordova run android --prod
    $ ionic cordova build ios --prod


Pages: 

* Home: Principal page that send you to gallery or tasks section.
* Gallery: You will be able to choose a dog breed and see 5 images in an ion-slide component. Also is posible to select another breed and refresh the gallery.
* Tasks: In this section you can create tasks with a description and a date. The tasks will show in a list below. You can delete any task too.

Extra:

* Login: You have to login to the app with the username (admin@admin.com) and password (admin).
* Add a custom toast in Login page to show errors.
* I add a section of questions-answers on Tasks page.
* I use sqlite to persist the tasks.
