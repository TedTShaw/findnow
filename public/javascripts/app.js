(function() {
'use strict';

  angular.module('app', ['ui.router', 'ngResource', 'ngFileUpload'])
    .config(configRoutes);

  configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html'
    })

    .state('reportform', {
      url: '/form',
      templateUrl: 'templates/reportform.html',
      controller: 'ReportController as vm'
    })

    .state('thankyou', {
      url: '/thankyou',
      templateUrl: 'templates/thankyou.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html'
    })

    .state('events', {
      url: '/events',
      templateUrl: 'templates/forums/events.html',
      controller: 'ForumController as vm'
    })

    .state('restaurants', {
      url: '/restaurants',
      templateUrl: 'templates/forums/restaurants.html',
      controller: 'ForumController as vm'
    })

    .state('businesses', {
      url: '/businesses',
      templateUrl: 'templates/forums/businesses.html',
      controller: 'ForumController as vm'
    })

    .state('publicareas', {
      url: '/publicareas',
      templateUrl: 'templates/forums/publicareas.html',
      controller: 'ForumController as vm'
    })

    .state('post', {
      url: '/post/:id',
      templateUrl: 'templates/post.html',
      controller: 'PostController as vm'
    })

  $urlRouterProvider.otherwise('/welcome');
  }



})();
