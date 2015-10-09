(function(){
  "use strict";

  angular.module('home.service',[])

  .factory('HomeService', ['$http', '$state', 'secret', 'kinvey',
        function($http, $state, secret, kinvey) {
            var header = {
                'Authorization': secret.auth,
                'Content-Type': 'application/json'
            };
            var entries = [];

            var service = {
              getAll: function() {
                  return $http.get(kinvey.baseURL + '/appdata/'+kinvey.app_key+'/entry',{headers:header})
                      .then(function(response) {
                          entries = response.data;
                          return entries;
                      });
              },
              save: function(todo) {
                  return $http.post(kinvey.baseURL + '/api/todos', todo)
                      .then(function(response) {
                          todos.push(response.data);
                      });
              },
              update: function(todo) {
                  return $http.put(kinvey.baseURL + '/api/todos', todo)
                      .then(function(response) {
                          var index = todos.indexOf($filter('filter')(todos, {
                              id: todo.id
                          })[0]);
                          todos[index] = response.data;
                      });
              },
              delete: function(todoId) {
                  return $http.delete(kinvey.baseURL + '/api/todos/' + todoId)
                      .then(function() {
                          var index = todos.indexOf($filter('filter')(todos, {
                              id: todoId
                          })[0]);
                          todos.splice(index, 1);
                      });
              }

            };
            return service;
        }
  ]);
})();
