(function () {

  'use strict';

  angular
    .module('myApp')
    .factory('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', '$timeout'];

  function authService($state,angularAuth0, $timeout) {
    this.login = function() {
      console.log('yas');
      //angularAuth0.authorize();
    }
  }
})();