(function(){
  "use strict";

  angular.module('login.service',[])

  .factory('LoginService', ['$http', 'session', '$state', '$ionicHistory',
        function($http, domain, secret, $httpParamSerializerJQLike, session, $state, $ionicHistory) {
            var service = {
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
            };
            return service;
        }
  ]);
})();
