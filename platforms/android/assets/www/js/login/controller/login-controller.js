(function(){
  "use strict";
  angular.module('login.controller',[])

  .controller('LoginCtrl',['$rootScope','$state','$ionicPopup','$ionicHistory','LoginService',function($rootScope,$state,$ionicPopup,$ionicHistory,LoginService){

    var self = this;
    self.clearPrevLogin = function(){
      self.PIN = "";
    };

    self.add = function(value) {

        if(self.PIN === "" || self.PIN === undefined) {
            self.PIN = value;
        } else {
            self.PIN = self.PIN + "" + value;
        }

    }

    self.remove = function() {

        if(self.PIN !== "" || self.PIN !== undefined) {
            self.PIN = self.PIN.slice(0, -1);
        }

    }

    self.login = function() {
      var user = {
        "username":"kyaroru",
        "password":self.PIN
      };
      LoginService.login(user).then(function(data){
        $state.go("tabs.home");
        $rootScope.isLoggedIn = true;
        $rootScope.user = data;
      })
      .catch(function(response){
        //var failLogin = $filter('translate')('fail_login');
        var alertPopup = $ionicPopup.alert({
          title: 'Login Failed',
          template: 'Please try again or reset your PIN'
        });
        alertPopup.then(function(res) {
          //do something
        });
        self.PIN = "";
      });
    }

    $rootScope.$on('login.logout', function(e) {
      if($rootScope.isLoggedIn) {
        $rootScope.isLoggedIn = false;
        $rootScope.user = null;
      }
      self.clearPrevLogin();

     });

  }])

  .controller("ForgetPassCtrl",['$rootScope','$ionicHistory','$state',function($rootScope,$ionicHistory,$state){
    var self = this;
    self.backToLogin = function() {
      $ionicHistory.nextViewOptions({
          disableBack: true,
          historyRoot: true
      });

      $state.go("login");
      $rootScope.$broadcast('login.logout');
    };
  }]);

})();
