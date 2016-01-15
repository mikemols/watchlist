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


  addMovie(movieTitel) {
    this.$http.get('http://api.myapifilms.com/imdb/idIMDB?title=' + movieTitel + '&token=6a9851dc-1cc0-4bab-98b5-34dd6118deff').then(function(response) {
      $scope.getMovie = response.data.movie.title;
    });
  }

  });
})();
