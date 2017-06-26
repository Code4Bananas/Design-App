// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: 'HomeCtrl'
  })

  .state('register', {
    url: "/register",
    templateUrl: "templates/two.html",
    controller: 'RegisterCtrl'
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/one.html",
    controller: 'LoginCtrl'
  })

  .state('home.one', {
    url: "/one",
    views: {
      'one' : {
    templateURL: "templates/one.html",
    controller: 'OneCtrl'    
      }
    }
  })
  
   .state('two', {
   url: "/two",
   templateURL: "templates/two.html",
   controller: 'TwoCtrl'
  })
  
   .state('home.three', {
    url: "/three",
    abstract: true,
    templateURL: "templates/three.html",
    controller: 'HomeCtrl'    
  })
  
   .state('all', {
   url: "/all",
   templateURL: "templates/all.html",
   controller: 'HomeCtrl'
  })
  
  .state('1B1', {
  url: "/1B1",
  templateURL: "templates/1B1.html",
  controller: '1B1Ctrl'
  })
  
   .state('1B2', {
   url: "/1B2",
   templateURL: "templates/1B2.html",
   controller: '1B2Ctrl'
  })
  
  .state('1B3', {
  url: "/1B3",
  templateURL: "templates/1B3.html",
  controller: '1B3Ctrl'
  })

  .state('2B1', {
  url: "/2B1",
  templateURL: "templates/2B1.html",
  controller: '2B1Ctrl'
  })
  
   .state('2B2', {
   url: "/2B2",
   templateURL: "templates/2B2.html",
   controller: '2B2Ctrl'
  })
  
  .state('2B3', {
  url: "/2B3",
  templateURL: "templates/2B3.html",
  controller: '2B3Ctrl'
  })  
  
    .state('2B4', {
  url: "/2B4",
  templateURL: "templates/2B4.html",
  controller: '2B4Ctrl'
  })
  
   .state('2B5', {
   url: "/2B5",
   templateURL: "templates/2B5.html",
   controller: '2B5Ctrl'
  })
  
  .state('2B6', {
  url: "/2B6",
  templateURL: "templates/2B6.html",
  controller: '2B6Ctrl'
  })
  
    .state('3B1', {
  url: "/3B1",
  templateURL: "templates/3B1.html",
  controller: '3B1Ctrl'
  })
  
   .state('3B2', {
   url: "/3B2",
   templateURL: "templates/3B2.html",
   controller: '3B2Ctrl'
  })
  
  .state('3B3', {
  url: "/3B3",
  templateURL: "templates/3B3.html",
  controller: '3B3Ctrl'
  })  
  
    .state('3B4', {
  url: "/3B4",
  templateURL: "templates/3B4.html",
  controller: '3B4Ctrl'
  })
  
   .state('3B5', {
   url: "/3B5",
   templateURL: "templates/3B5.html",
   controller: '3B5Ctrl'
  })
  
  .state('3B6', {
  url: "/3B6",
  templateURL: "templates/3B6.html",
  controller: '3B6Ctrl'
  })
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

  // Register middleware to ensure our auth token is passed to the server
  $httpProvider.interceptors.push('TokenInterceptor');

})

.run(function($window, $location, $ionicPlatform, $rootScope, AuthenticationService) {
  $rootScope.user = {
    name: $window.sessionStorage.name,
    is_admin: $window.sessionStorage.is_admin
  };

  if ($rootScope.user.is_admin) {
    AuthenticationService.isAdmin = true;
  }

  $rootScope.$on("$stateChangeStart", function(event, toState) {
    //redirect only if both isAuthenticated is false and no token is set

    if (['home', 'login', 'logout', 'register', 'one', 'two', 'three', 'all', '1B1', '1B2', '1B3', '2B1', '2B2', '2B3', '2B4', '2B5', '2B6', '3B1', '3B2', '3B3', '3B4', '3B5', '3B6'].indexOf(toState.name) === -1) {
      if (!AuthenticationService.isAuthenticated && !$window.localStorage.token) {
        event.preventDefault();
        $location.path("/home");
      }
    }

  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
