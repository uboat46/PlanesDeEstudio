(function(){
    'use strict';

    angular
    .module('myApp')
    .component('loginComponent',{
        templateUrl:'views/login/loginView.html',
        controller: loginCtrl,
        controllerAs: 'vm'
    });
    
    loginCtrl.$inject = ['authService'];
    console.log(loginCtrl.$inject);
    function loginCtrl(authService){
        console.log('created controller');
        var vm = this;
        //authService.login();
    }
})();