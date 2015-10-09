// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('diary', [
  'ionic',
  'ngStorage',
  'session',
  'diary.route',
  'module.login',
  'module.home',
  'configuration'
])

.run(function($ionicPlatform,$rootScope,session,$http) {
  $http.defaults.headers.common.Authorization = session.getBearerToken();

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.isLoggedIn = false;
})

.controller("TabCtrl",['session','$rootScope','$ionicHistory','$ionicPopup','$state',function(session,$rootScope,$ionicHistory,$ionicPopup,$state){
  var self = this;
  self.logout = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirm Exit',
      template: 'Are you sure you want to exit?'
    });
    confirmPopup.then(function(result) {
      if(result) {
        session.destroy();

        $ionicHistory.nextViewOptions({
            disableBack: true,
            historyRoot: true
        });
        $state.go("login");
        $rootScope.$broadcast('login.logout');
      } else {
        console.log('You are not sure');
      }
    });

  };
}])
