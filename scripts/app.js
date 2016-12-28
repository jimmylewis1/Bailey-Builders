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
      })
      .state('commercial', {
        url: '/commercial',
        templateUrl: 'commercial.html'
        //controller: 'servicesCtrl'
      })
      .state('residential', {
        url: '/residential',
        templateUrl: 'residential.html'
        //controller: 'servicesCtrl'`
      });
  }
]);

