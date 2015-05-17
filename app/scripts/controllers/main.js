'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('MainCtrl', function ($scope, Restangular) {

    $scope.ports = [];


    function fetch() {

      $scope.ports = Restangular.all('port').getList().$object;

    }

    fetch();


  });
