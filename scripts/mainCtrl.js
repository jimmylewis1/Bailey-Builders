var app = angular.module('bailey');

  app.controller('mainCtrl', ['$scope', '$location',
    function($scope, $location){
    $scope.test = "This is the home page.";
    $scope.currentPath = $location.path();
  }]);