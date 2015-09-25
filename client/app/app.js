import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import home from './home/home.js';

angular.module('app', [
    uiRouter,
    ngMessages,
    ngAnimate,
    'breeze.angular',
    home.name
])
    .run(function($rootScope, $state, breeze) {
        /*$rootScope.$new(); //true param creates isolate scope
         $rootScope.$emit(); //or $scope.emit() sends a mesesage up to all scope through to the rootScope
         $rootScope.$broadcast(); //or $scope.$broadcast() sends a mesesage down to all scope
         // Good practice is to broadcast down from rootScope so that everyone hears it.*/
        /*$rootScope.$on('myEvent', function(){
         console.log(arguments);
         });*/
        console.log(breeze);
        $rootScope.breeze = breeze;
        var server = 'http://localhost:3002';
        $rootScope.entityManager = new breeze.EntityManager(server);

        //manager.enableSaveQueuing(true);
        console.log($rootScope.entityManager);
        /*$rootScope.$on('$stateChangeStart', function(){
         console.log(arguments); // This listens to state changes for example when uiRouter changes state perfect for handling authentication
         });*/

        $state.go('app.home');
    })
    .config(function($stateProvider, $httpProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                abstract: true,
                template: '<ui-view></ui-view>'
            });
        $httpProvider.defaults.useXDomain = true;
        //$httpProvider.defaults.withCredentials = true;
        //$httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PUT,HEAD,DELETE,OPTIONS';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })