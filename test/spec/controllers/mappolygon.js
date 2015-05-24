'use strict';

describe('Controller: MappolygonCtrl', function () {

  // load the controller's module
  beforeEach(module('mmtApp'));

  var MappolygonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MappolygonCtrl = $controller('MappolygonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
