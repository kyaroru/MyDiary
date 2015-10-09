(function(){
  "use strict";
  angular.module('home.controller',[])
  .controller('HomeCtrl',[ 'HomeService','$scope',function(HomeService,$scope){
    var self = this;

    self.doRefresh = function() {
      HomeService.getAll().then(function(data){
        self.entries = data;
        $scope.$broadcast('scroll.refreshComplete');
      })
    };

    self.openAddModal = function() {
      
    };

    HomeService.getAll().then(function(data){
      self.entries = data;
    })
    .catch(function(response){
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: 'There might be an issue with the app'
      });
      alertPopup.then(function(res) {
        //do something
      });
    });

  }]);

})();
