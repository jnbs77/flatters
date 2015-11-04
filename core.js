// public/core.js
var testApp = angular.module('testApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/new')
        .success(function(data) {
            $scope.terrains = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


}