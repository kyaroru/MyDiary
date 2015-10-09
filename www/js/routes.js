(function(){
  angular.module('diary.route',[])
  .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginCtrl as lc'
        })
        .state('forgot-password', {
          url: '/forgot-password',
          templateUrl: 'templates/forgot-password.html',
          controller:'ForgetPassCtrl as fp'
        })
        .state('tabs', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html',
          controller:'TabCtrl as tc'
        })
        .state('tabs.home', {
          url: '/home',
          views: {
            'home-tab': {
              templateUrl: 'templates/home.html',
              controller: 'HomeCtrl as hc'
            }
          }
        })
        .state('tabs.about', {
          url: '/about',
          views: {
            'about-tab': {
              templateUrl: 'templates/about.html'
            }
          }
        })
        .state('tabs.about-in', {
          url: '/about-in',
          views: {
            'about-tab': {
              templateUrl: 'templates/about-inner.html'
            }
          }
        });


       $urlRouterProvider.otherwise('/login');
  });
})();
