(function(){
    'use strict';

    config.$inject = ['$routeProvider','angularAuth0Provider'];
    function config($routeProvider,angularAuth0Provider) {
        $routeProvider

            .when('/home',{
                template: '<login-component></login-component>',
                controllerAs: 'vm'
            })
            .when('/callback', {
                templateUrl: '<div>authenticated!!!</div>',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
            // Initialization for the angular-auth0 library
        angularAuth0Provider.init({
            clientID: 'V13z5hyVTQCjneUns6NLtVozK7PMU3yp',
            domain: 'uboat46.auth0.com',
            responseType: 'token id_token',
            audience: 'https://uboat46.auth0.com/userinfo',
            redirectUri: 'http://localhost:8080/callback',
            scope: 'openid'
        });
    }
    angular.module('myApp').config(config);    
})();