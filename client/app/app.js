'use strict';

angular.module('meanWatchlistApp', [
  'meanWatchlistApp.auth',
  'meanWatchlistApp.admin',
  'meanWatchlistApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
