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

    function parseData(polygon) {

      var p,
          _p = [],
          lan_lon;

      if (polygon === '') {
        return null;
      }

      p = polygon.split('|');


      for(var i in p) {

        lan_lon = p[i].split(',');

        _p.push({

          lat: lan_lon[0],
          lon: lan_lon[1],

        });

      }

      return _p;

    }

    $scope.titleAction = 'Edit';

    $scope.name = item.name;
    $scope.code = item.code;
    $scope.maxWidth = parseInt(item.max_width);
    $scope.maxLength = parseInt(item.max_length);

    // Parse saved Data
    $scope.saved_polygon = parseData(item.polygon);

    $scope.polygon = null;

    $scope.ok = function () {
      saveItem();
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    function saveItem() {

      var polygon = '';

      if ($scope.polygon !== null) {

        polygon = $scope.polygon.getPath().getArray().join('|').replace(/[\(\)]/ig, '');

      }

      item.name = $scope.name;
      item.code = $scope.code;
      item.max_width = $scope.maxWidth;
      item.max_length = $scope.maxLength;
      item.polygon = polygon;

      item.put();

    }



  });
