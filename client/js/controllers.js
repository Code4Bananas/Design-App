angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location, RegistrationService) {
  $scope.logout = function() {
    RegistrationService.logout();
    $location.path("/home");
  }
  $scope.timeleft = '0 secs';
})

.controller('FormCtrl', function($scope, $location, $RegistrationService) {

})

.controller('RegisterCtrl', function($scope, $location, RegistrationService) {
  $scope.user = {
    name: '',
    email: '',
    password: '',
    password2: ''
  };

  $scope.$parent.logout_text = 'Logout';

  $scope.register = function() {
    RegistrationService.register($scope.user).then(function() {
      $location.path("/");
    })
  }
})

.controller('LoginCtrl', function($scope, $location, RegistrationService) {
  $scope.user = {
    email: '',
    password: ''
  };

  $scope.$parent.logout_text = 'Register';

  $scope.login = function() {
    RegistrationService.login($scope.user.email, $scope.user.password).then(function() {
      $location.path("/");
    });
  }

})

.controller('LeadersCtrl', function($scope, SocketIO, Answer) {
  $scope.leaders = Answer.leaders();

  SocketIO.on('answer', function(msg) {
    $scope.leaders = Answer.leaders();
  });

  $scope.$on('$destroy', function(event) {
    SocketIO.removeAllListeners('answer');
  });

})

.controller('HomeCtrl', function($scope, $location) {

})

.controller('CalendarCtrl', function($scope, $location) {
  
})

.controller('OneCtrl', function($scope, $location) {

})

.controller('TwoCtrl', function($scope, $location) {

})


.controller('ThreeCtrl', function($scope, $location) {
  
})




.controller('AllCtrl', function($scope, $location) {

})

.controller('1B1Ctrl', function($scope, $location) {
  
})

.controller('1B2Ctrl', function($scope, $location) {
  
})

.controller('1B3Ctrl', function($scope, $location) {
  
})

.controller('2B1Ctrl', function($scope, $location) {
  
})

.controller('2B2Ctrl', function($scope, $location) {
  
})

.controller('2B3Ctrl', function($scope, $location) {
  
})
.controller('2B4Ctrl', function($scope, $location) {
  
})

.controller('2B5Ctrl', function($scope, $location) {
  
})

.controller('2B6Ctrl', function($scope, $location) {
  
})

.controller('3B1Ctrl', function($scope, $location) {
  
})

.controller('3B2Ctrl', function($scope, $location) {
  
})

.controller('3B3Ctrl', function($scope, $location) {
  
})
.controller('3B4Ctrl', function($scope, $location) {
  
})

.controller('3B5Ctrl', function($scope, $location) {
  
})

.controller('3B6Ctrl', function($scope, $location) {
  
})

