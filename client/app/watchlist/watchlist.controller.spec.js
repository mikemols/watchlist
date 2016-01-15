'use strict';

describe('Controller: WatchlistCtrl', function () {

  // load the controller's module
  beforeEach(module('meanWatchlistApp'));

  var WatchlistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WatchlistCtrl = $controller('WatchlistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
