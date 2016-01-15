'use strict';

angular.module('meanWatchlistApp.auth', [
  'meanWatchlistApp.constants',
  'meanWatchlistApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
