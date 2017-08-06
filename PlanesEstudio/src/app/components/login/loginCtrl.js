(function(){
    'use strict';

    angular
    .module('myApp')
    .component('loginComponent',{
        templateUrl:'views/login/loginView.html',
        controller: navigationCtrl,
        controllerAs: 'vm'
    });

    function navigationCtrl(){
        var vm = this;
        
    }
})();