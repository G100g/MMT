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
    'restangular',
    'ui.bootstrap'
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

  })

  // Service to broadcast events

  .factory('portsService', function ($rootScope, Restangular) {

    var ports = Restangular.all('port'),
        $ports;

    return {

      ports: ports,

      getItems: function () {

          $ports = ports.getList().$object;

          return $ports;
      }

    };

  })

  .controller('HeaderCtrl', function ($scope, $modal) {

    $scope.createPort = function () {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/modalPort.html',
        controller: 'ModalPortCtrl',
      });

      // modalInstance.result.then(function () {
      //
      //   // Send message to update listed
      //
      //   commService.updateItems();
      //
      // });

    };

  });
