'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:ModalportctrlCtrl
 * @description
 * # ModalportctrlCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('ModalPortCtrl', function ($scope, $modalInstance, portsService) {

    $scope.titleAction = 'Create';

    $scope.name = '';
    $scope.code = '';
    $scope.maxWidth = 0;
    $scope.maxLength = 0;

    $scope.polygon = null;

    $scope.ok = function () {
      saveItem();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    function saveItem() {

        var polygon;

        if ($scope.polygon !== null) {

          polygon = $scope.polygon.getPath().getArray().join('|').replace(/[\(\)]/ig, '');

        }

        portsService.service.post({

          name: $scope.name,
          code: $scope.code,
          max_width: $scope.maxWidth,
          max_length: $scope.maxLength,
          polygon: polygon,

        }).then(function () {

          portsService.updateItems();

          $modalInstance.close();

        });

    }

  });
