(function(){
  "use strict";
  angular.module('login.controller',[])
/*
  .controller('LoginCtrl',[ 'LoginService','$filter',function(LoginService,$filter){
    var self = this;

    self.signIn = function(user,signInForm) {
      self.user = {};
      signInForm.$setPristine();
      LoginService.login(user)
        .catch(function(){

          //var failLogin = $filter('translate')('fail_login');
          //alert(failLogin);
        });
    };
  }])
*/
  .controller('LoginCtrl',['$rootScope','$scope','$state', function($rootScope,$scope,$state){

    $scope.clearPrevLogin = function(){
      if($rootScope.isLoggedIn) {
        $rootScope.isLoggedIn = false;
        $scope.expression = "";
      }
    };

    $scope.add = function(value) {

        if($scope.expression === "" || $scope.expression === undefined) {
            $scope.expression = value;
        } else {
          if($scope.expression.length>=4) {

            $state.go("tabs.home");
            $rootScope.isLoggedIn = true;
          } else {
            $scope.expression = $scope.expression + "" + value;
          }
        }

    }

    $rootScope.$on('login.logout', function(e) {
      $scope.clearPrevLogin();
     });

  }]);

})();
