'use strict';

App.controller('JokeController', ['$scope','$http', function ($scope, $http) {

    var URL = "https://52.54.218.210:80/api/v1/joke";

    $scope.joke = "";

    $scope.getJoke = function () {
        $http.get(URL).then(successCallback, errorCallback);

        function successCallback(response){
            $scope.joke = response.data.joke;
        }
        function errorCallback(error){
            console.log(error);
        }
    }

    var init = function () {
        $scope.getJoke();
    }

    init();

}]);