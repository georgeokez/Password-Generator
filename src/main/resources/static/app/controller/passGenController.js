'use strict';
// Deploy to live Heroku
App.controller('PassGenController', ['$scope','$http', function ($scope, $http) {

    var numbArray = ["0","1","2","3","4","5","6","7","8","9"];
    var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCaseArray = [];
    var symbols = ["!","@","#","$","%","^","&","*","(",")"];

    $scope.passwordLength = "6";   //default value
    $scope.numbSelect = false;
    $scope.lowerCaseSelect = false;
    $scope.upperCaseSelect = false;
    $scope.symbolSelect = false;
    $scope.generatedPassword = "";

    function randomSortArray(){
        var randSortedArray = [];
        randSortedArray = createRandomPassword();
        randSortedArray.sort(function (a, b) {return 0.5 - Math.random() });
        return randSortedArray.join("");
    }

     function createRandomPassword(){
        var randomArray = [];
        var passLength = 6;   // default value
        passLength = parseInt($scope.passwordLength);
        for(var i = 1; i <= passLength; i++){

            if($scope.numbSelect){
                if(randomArray.length === passLength) break;
                randomArray.push(getRandomCharacter(numbArray));
            }

            if($scope.lowerCaseSelect){
                if(randomArray.length === passLength) break;
                randomArray.push(getRandomCharacter(lowerCaseArray));
            }

            if($scope.upperCaseSelect){
                if(randomArray.length === passLength) break;
                randomArray.push(getRandomCharacter(upperCaseArray));
            }

            if($scope.symbolSelect){
                if(randomArray.length === passLength) break;
                randomArray.push(getRandomCharacter(symbols));
            }
        }
        return randomArray;
     }

     function getRandomCharacter(array){
       var ramndomNumb = Math.floor(Math.random() * array.length);
        return array[ramndomNumb];
     }

    function toUpperCase(){
        for (var i = 0; i < lowerCaseArray.length; i++){
            upperCaseArray.push(lowerCaseArray[i].toUpperCase());
        }
    };

    $scope.generatePassword = function () {
        $scope.generatedPassword = randomSortArray();
    }


    var init = function () {
        toUpperCase();
        $scope.generatedPassword = randomSortArray();
    }

    init();

}]);