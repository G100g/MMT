'use strict';

describe('Controller: ModalportctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('mmtApp'));

  var ModalportctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalportctrlCtrl = $controller('ModalportctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
