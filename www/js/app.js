// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      if (ionic.Platform.isAndroid()) {
        StatusBar.backgroundColorByHexString("#608628");
      } else {
        StatusBar.styleLightContent();
      }
      // org.apache.cordova.statusbar required
    }

    $timeout(function() {
      navigator.splashscreen.hide();
    }, 500);
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.vibe', {
    url: "/vibe",
    views: {
      'menuContent': {
        templateUrl: "templates/vibe.html"
      }
    }
  })

  .state('app.things', {
    url: "/things",
    views: {
      'menuContent': {
        templateUrl: "templates/things.html"
      }
    }
  })

  .state('app.people', {
    url: "/people",
    views: {
      'menuContent': {
        templateUrl: "templates/people.html"
      }
    }
  })

  .state('app.places', {
    url: "/places",
    views: {
      'menuContent': {
        templateUrl: "templates/places.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/vibe');
});
