'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:ModalportctrlCtrl
 * @description
 * # ModalportctrlCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('ModalEditPortCtrl', function ($scope, $modalInstance, item) {

    $scope.titleAction = 'Edit';

    $scope.name = item.name;
    $scope.code = item.code;
    $scope.maxWidth = parseInt(item.max_width);
    $scope.maxLength = parseInt(item.max_length);

    $scope.ok = function () {
      saveItem();
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    function saveItem() {

      item.name = $scope.name;
      item.code = $scope.code;
      item.max_width = $scope.maxWidth;
      item.max_length = $scope.maxLength;

      item.put();

    }

  });
