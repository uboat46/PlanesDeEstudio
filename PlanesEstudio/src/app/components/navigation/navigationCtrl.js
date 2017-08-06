(function(){
    'use strict';

    angular
    .module('myApp')
    .component('navigationComponent',{
        templateUrl:'views/navigation/navigationView.html',
        controller: navigationCtrl,
        controllerAs: 'vm'
    });

    function navigationCtrl(){
        var vm = this;
        vm.user = 'login';
    }
})();