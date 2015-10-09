// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.home', {
  url: '/home',
  views: {
    'tab-home': {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    }
  }})
  .state('tab.login', {
  url: '/login',
  views: {
    'tab-login': {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    }
  }});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

})

.controller("LoginCtrl",function($scope,$location){

  $scope.add = function(value) {

      if($scope.expression === "" || $scope.expression === undefined) {
          $scope.expression = value;
      } else {
        if($scope.expression.length>=4) {

          $location.path("/tab/home");
        } else {
          $scope.expression = $scope.expression + "" + value;
        }
      }

  }

})

.controller("HomeCtrl",function($scope,$location){

})
