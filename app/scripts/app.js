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

    var service = Restangular.all('port'),
        $ports;

        console.log($ports);

    return {

      service: service,
      $ports: $ports,

      getItems: function () {

          this.$ports = this.service.getList();

          return this.$ports;
      },

      updateItems: function () {

        $rootScope.$emit('updateItems');

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



    };

  });
