(function(){
  "use strict";

  angular.module('login.service',[])
  .factory('LoginService', ['$http','kinvey','secret','session','$state', '$ionicHistory',
          function($http, kinvey, secret, session, $state, $ionicHistory) {
            var header = {
                'Authorization': secret.auth,
                'Content-Type': 'application/json'
            };
            var service = {
                login: function(user) {
                    return $http.post(kinvey.baseURL + '/user/'+kinvey.app_key+'/login', user,
                        {
                            headers: header
                        })
                        .then(function (response) {
                            //console.log('login', response);
                            session.create(response.data._kmd.authtoken, user.username);

                            return response.data;
                        });
                },
                logout: function() {},
                resetPassword: function(email) {
                  return $http.post(kinvey.baseURL + '/rpc/'+kinvey.app_key+'/'+email+'/user-password-reset-initiate',{},{headers: header})
                      .then(function (response) {
                          //console.log('login', response);
                          return response.data;
                      });
                }
            };
            return service;
        }
  ]);
})();
