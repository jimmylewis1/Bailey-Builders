var app = angular.module('bailey', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'mainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
        //controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
        //controller: 'servicesCtrl'
      });
  }
]);

