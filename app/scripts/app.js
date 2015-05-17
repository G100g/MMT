'use strict';

/**
 * @ngdoc overview
 * @name mmtApp
 * @description
 * # mmtApp
 *
 * Main module of the application.
 */
angular
  .module('mmtApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    RestangularProvider.setBaseUrl(BASE_URL);

  });
