import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './items.controller.js';
import template from './items.html';

let items = angular.module('app.home.items', [
    uiRouter
])
.config(function($stateProvider) {
    $stateProvider
        .state('app.home.items', {
            url: 'items',
            template: template,
            controller: 'ItemsController',
            controllerAs: 'Items'
        });
}).controller('ItemsController', controller);
export default items;