(function() {
    'use strict'
    angular.module('app')
        .controller('page1Ctrl', function($scope) {
            $scope.title = 'Page 1';
        })
        .controller('LoginCtrl', ['$scope', '$http',
            function(scope, $http) {
                $http.get('/api/login').success(function(resp) {
                    scope.loginInfo = resp;
                });
                scope.logout = function() {
                    $http.delete('/api/login').success(function() {
                        scope.loginInfo = {};
                    })
                };
                scope.onLogin = function(info) {
                    console.log(info);
                    scope.loginInfo = info;
                }
            }
        ])

})();
