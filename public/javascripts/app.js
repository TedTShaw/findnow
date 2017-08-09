(function() {
'use strict';

  angular.module('app', ['ui.router', 'ngResource'])
    .config(configRoutes)
    .run(runBlock)
    .run(loginBlock);

    runBlock.$inject = ['$rootScope', '$state', 'UserService'];

    function runBlock($rootScope, $state, UserService) {
      $rootScope.$on('$stateChangeStart', function(evt, toState) {
        if(toState.loginRequired && !UserService.isLoggedIn()) {
          evt.preventDefault();
          $state.go('login');
        }
      });
    }

    loginBlock.$inject = ['$rootScope', '$state', 'UserService'];

    function loginBlock($rootScope, $state, UserService) {
      $rootScope.$on('$stateChangeStart', function(evt, toState) {
        if(toState.loggedIn && UserService.isLoggedIn()) {
          evt.preventDefault();
          $state.go('welcome');
        }
      });
    }

  configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function configRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html'
    })


    .state('login', {
      url: '/login',
      templateUrl: 'templates/users/login.html',
      controller: 'UserController as userCtrl',
      loggedIn: true
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/users/signup.html',
      controller: 'UserController as userCtrl',
      loggedIn: true
    })

    // .state('profile', {
    //   url: '/profile',
    //   templateUrl: 'templates/users/profile.html',
    //   loginRequired: true
    // })

    .state('reportform', {
      url: '/form',
      templateUrl: 'templates/reportform.html',
      controller: 'ReportController as vm',
      loginRequired: true
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
