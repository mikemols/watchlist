'use strict';

angular.module('meanWatchlistApp')
  .controller('WatchlistCtrl', function ($scope, $http, socket) {
    $scope.getWatchlist = [];

    $http.get('/api/watchlists').success(function(getWatchlist) {
      $scope.getWatchlist = getWatchlist;
      socket.syncUpdates('watchlist', $scope.getWatchlist);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('watchlist');
    });
  });
