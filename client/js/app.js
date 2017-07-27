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
    url: "/",
    templateUrl: "templates/home.html",
    controller: 'HomeCtrl'
  })
  
  .state('form', {
    url: "/form",
    templateUrl: "templates/form.html",
    controller: 'FormCtrl'
  })
  
  .state('thankyou', {
    url: "/thankyou",
    templateUrl: "templates/thankyou.html",
    controller: 'HomeCtrl'
  })
  
  .state('register', {
    url: "/register",
    templateUrl: "templates/register.html",
    controller: 'RegisterCtrl'
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('one', {
    url: "/one",
    templateUrl: "templates/one.html",
    controller: 'OneCtrl'
  })
  
   .state('two', {
   url: "/two",
   templateUrl: "templates/two.html",
   controller: 'TwoCtrl'
  })
  
   .state('three', {
    url: "/three",
    templateUrl: "templates/three.html",
    controller: 'ThreeCtrl'
  })
  
   .state('all', {
   url: "/all",
   templateUrl: "templates/all.html",
   controller: 'HomeCtrl'
  })
  
  .state('1B1', {
  url: "/1B1",
  templateUrl: "templates/1B1.html",
  controller: '1B1Ctrl'
  })
  
   .state('1B2', {
   url: "/1B2",
   templateUrl: "templates/1B2.html",
   controller: '1B2Ctrl'
  })
  
  .state('1B3', {
  url: "/1B3",
  templateUrl: "templates/1B3.html",
  controller: '1B3Ctrl'
  })

  .state('2B1', {
  url: "/2B1",
  templateUrl: "templates/2B1.html",
  controller: '2B1Ctrl'
  })
  
   .state('2B2', {
   url: "/2B2",
   templateUrl: "templates/2B2.html",
   controller: '2B2Ctrl'
  })
  
  .state('2B3', {
  url: "/2B3",
  templateUrl: "templates/2B3.html",
  controller: '2B3Ctrl'
  })  
  
    .state('2B4', {
  url: "/2B4",
  templateUrl: "templates/2B4.html",
  controller: '2B4Ctrl'
  })
  
   .state('2B5', {
   url: "/2B5",
   templateUrl: "templates/2B5.html",
   controller: '2B5Ctrl'
  })
  
  .state('2B6', {
  url: "/2B6",
  templateUrl: "templates/2B6.html",
  controller: '2B6Ctrl'
  })
  
    .state('3B1', {
  url: "/3B1",
  templateUrl: "templates/3B1.html",
  controller: '3B1Ctrl'
  })
  
   .state('3B2', {
   url: "/3B2",
   templateUrl: "templates/3B2.html",
   controller: '3B2Ctrl'
  })
  
  .state('3B3', {
  url: "/3B3",
  templateUrl: "templates/3B3.html",
  controller: '3B3Ctrl'
  })  
  
    .state('3B4', {
  url: "/3B4",
  templateUrl: "templates/3B4.html",
  controller: '3B4Ctrl'
  })
  
   .state('3B5', {
   url: "/3B5",
   templateUrl: "templates/3B5.html",
   controller: '3B5Ctrl'
  })
  
  .state('3B6', {
  url: "/3B6",
  templateUrl: "templates/3B6.html",
  controller: '3B6Ctrl'
  })
  
  .state('C1', {
  url: "/C1",
  templateUrl: "templates/C1.html",
  controller: 'CalendarCtrl'
 })

  .state('C2', {
  url: "/C2",
  templateUrl: "templates/C2.html",
  controller: 'CalendarCtrl'
 })
  
  .state('C3', {
  url: "/C3",
  templateUrl: "templates/C3.html",
  controller: 'CalendarCtrl'
 })  
  
   .state('C4', {
  url: "/C4",
  templateUrl: "templates/C4.html",
  controller: 'CalendarCtrl'
 })
  
  .state('C5', {
  url: "/C5",
  templateUrl: "templates/C5.html",
  controller: 'CalendarCtrl'
 })

  .state('C6', {
  url: "/C6",
  templateUrl: "templates/C6.html",
  controller: 'CalendarCtrl'
 })  
  
  .state('C7', {
  url: "/C7",
  templateUrl: "templates/C7.html",
  controller: 'CalendarCtrl'
 }) 
  
  .state('C8', {
  url: "/C8",
  templateUrl: "templates/C8.html",
  controller: 'CalendarCtrl'
 })

  .state('C9', {
  url: "/C9",
  templateUrl: "templates/C9.html",
  controller: 'CalendarCtrl'
 })
  
  .state('C10', {
  url: "/C10",
  templateUrl: "templates/C10.html",
  controller: 'CalendarCtrl'
 })  
  
   .state('C11', {
  url: "/C11",
  templateUrl: "templates/C11.html",
  controller: 'CalendarCtrl'
 })
  
  .state('C12', {
  url: "/C12",
  templateUrl: "templates/C12.html",
  controller: 'CalendarCtrl'
 })

  .state('C13', {
  url: "/C13",
  templateUrl: "templates/C13.html",
  controller: 'CalendarCtrl'
 })  
  
  .state('C14', {
  url: "/C14",
  templateUrl: "templates/C14.html",
  controller: 'CalendarCtrl'
 })
  
  .state('C15', {
  url: "/C15",
  templateUrl: "templates/C15.html",
  controller: 'CalendarCtrl'
 })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

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
  
  $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeStart to '+toState.name+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
});
$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
  console.log('$stateChangeError - fired when an error occurs during transition.');
  console.log(arguments);
});
$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
  console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
});
$rootScope.$on('$viewContentLoading',function(event, viewConfig){
   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
});

/* $rootScope.$on('$viewContentLoaded',function(event){
     // runs on individual scopes, so putting it in "run" doesn't work.
     console.log('$viewContentLoaded - fired after dom rendered',event);
   }); */

$rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
  console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
  console.log(unfoundState, fromState, fromParams);
});
  
  
  
  
  
  $rootScope.$on("$stateChangeStart", function(event, toState) {
    //redirect only if both isAuthenticated is false and no token is set

    if (['home', 'login', 'logout', 'register', 'one', 'two', 'three', 'all', 'form', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', '1B1', '1B2', '1B3', '2B1', '2B2', '2B3', '2B4', '2B5', '2B6', '3B1', '3B2', '3B3', '3B4', '3B5', '3B6'].indexOf(toState.name) === -1) {
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
