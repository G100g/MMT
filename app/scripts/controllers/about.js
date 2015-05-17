'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
