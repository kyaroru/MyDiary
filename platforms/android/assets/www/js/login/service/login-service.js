(function(){
  "use strict";

  angular.module('login.service',[])

  .factory('LoginService', ['$http', 'parse', '$state', '$ionicHistory',
        function($http, parse, $state, $ionicHistory) {
          var authenticationHeaders = {
            "x-parse-application-id": parse.app_id,
            "x-parse-rest-api-key": parse.api_key
          };
            var service = {
                login: function login(user) {
                    var settings = {
                        headers: authenticationHeaders,
                        params: user
                    };

                    return $http.get(parse.baseURL + '/1/login', settings)
                        .then(function (response) {
                            //console.log('login', response);
                            return response.data;
                        });
                },
                /*
                login: function(user) {
                    return $http.post(

                        )
                        .then(function(response) {
                            session.create(response.data.access_token, user.username);

                            $ionicHistory.nextViewOptions({
                                disableAnimate: true,
                                disableBack: true,
                                historyRoot: true
                            });

                            $state.go('entries');
                        });
                }
                */
            };
            return service;
        }
  ]);
})();
