'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
