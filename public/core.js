var testApp = angular.module('testApp', []);

testApp.controller("mainController", 
    function ($scope, $http) {
            $scope.terrains = {};
            console.log("coucou4");
            // when landing on the page, get all todos and show them
            $http.get('/api/new')
                .success(function(data) {
                    console.log("coucou");
                    $scope.terrains = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }
);