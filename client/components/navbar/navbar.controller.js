'use strict';

class NavbarController {
  //start-non-standard
  menu = [
      {
        'title': 'Movie Database',
        'link': '/movie'
      },
      {
        'title': 'Compare watchlists',
        'link': '/watchlist'
      }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('meanWatchlistApp')
  .controller('NavbarController', NavbarController);
