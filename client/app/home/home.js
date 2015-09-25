import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './home.controller.js';
import template from './home.html';
import items from './items/items';

let home = angular.module('app.home', [
    uiRouter,
    items.name
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.home', {
            url: '/',
            template: template,
            controller: 'HomeController',
            controllerAs: 'Home'
        });
    $urlRouterProvider.otherwise('/');
}).controller('HomeController', controller);
export default home;