(function() {
    "use strict";
    angular.module('session', [])
        .factory('session', ['$localStorage', '$http', function($localStorage, $http) {
            var service = {
                getBearerToken: function() {
                    if ($localStorage.isAuthenticated)
                        return 'Bearer ' + $localStorage.token;
                    else
                        return '';
                },
                create: function(token, username) {
                    $localStorage.token = token;
                    $localStorage.username = username;
                    $localStorage.isAuthenticated = true;
                    $http.defaults.headers.common.Authorization = service.getBearerToken();
                },
                destroy: function() {
                    delete $localStorage.token;
                    delete $localStorage.username;
                    $localStorage.isAuthenticated = false;
                    delete $http.defaults.headers.common.Authorization;
                },
                isAuthenticated: function() {
                    return $localStorage.isAuthenticated;
                }
            };
            return service;
        }]);
})();
