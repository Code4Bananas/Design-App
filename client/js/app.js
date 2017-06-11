// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

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

    if (['home', 'login', 'logout', 'register', 'one', 'two', 'three', 'all'].indexOf(toState.name) === -1) {
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
    templateUrl: "templates/one.html",
    controller: 'RegisterCtrl'
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('one', {
    url: "/register",
    templateURL: "templates/one.html",
    controller: 'OneCtrl'    
  })
  
   .state('two', {
   url: "/two",
   templateURL: "templates/two.html",
   controller: 'TwoCtrl'
  })
  
   .state('three', {
   url: "/three",
   templateURL: "templates/three.html",
   controller: 'ThreeCtrl'
  })
  
   .state('all', {
   url: "/all",
   templateURL: "templates/all.html",
   controller: 'AllCtrl'
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

  // Register middleware to ensure our auth token is passed to the server
  $httpProvider.interceptors.push('TokenInterceptor');

})
