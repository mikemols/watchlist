'use strict';

angular.module('meanWatchlistApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('watchlist', {
        url: '/watchlist',
        templateUrl: 'app/watchlist/watchlist.html',
        controller: 'WatchlistCtrl'
      });
  });
