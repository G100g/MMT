'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('MainCtrl', function ($scope, $rootScope, $modal, portsService) {

    $scope.ports = [];


    function fetch() {

      // portsService.getItems().then(function (ports) {
      //   $scope.ports = ports;
      // });
      portsService.getItems().then(function (ports) {
        $scope.ports = ports;
      });

    }

    $scope.editPort = function (item) {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/modalPort.html',
        controller: 'ModalEditPortCtrl',
        resolve: {
          item: function () {
            return item;
          }
        }
      });

      // modalInstance.result.then(function () {
      //
      //   // Send message to update listed
      //
      //   fetch();
      //
      // });

    };

    $scope.deletePort = function (item) {

      if (confirm('Do you want delete' + item.name + ' port?')) {

        item.remove().then(function () {
          fetch();
        });

      }

      // modalInstance.result.then(function () {
      //
      //   // Send message to update listed
      //
      //   fetch();
      //
      // });

    };

    $rootScope.$on('updateItems', function () {

      fetch();

    });

    fetch();


  });
