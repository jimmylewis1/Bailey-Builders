var app = angular.module('bailey');

  app.controller('mainCtrl', ['$scope', function($scope){
    $scope.test = "This is the home page.";
  }]);