'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */
var dashBoard = angular.module('dashApp', ['ui.router', 'ui.bootstrap']);

//configure our routes 
dashBoard.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        })
        .state('root', {
            // resolve: {
            //     "check": function($location, $rootScope) {
            //         if (!$rootScope.loginIn) {
            //             $location.path('/login.html')
            //         }
            //     }
            // },
            url: '/root',
            templateUrl: 'templates/root.html'
        })
        .state('root.work', {
            url: '/work',
            templateUrl: 'templates/work.html',
            controller: 'work'
        })

    .state('root.overview', {
        url: '/overview',
        templateUrl: 'templates/overview.html',
        controller: 'overview'
    })

    .state('root.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: ''
        })
        .state('root.producer', {
            url: '/producer',
            templateUrl: 'templates/producer.html',
            controller: ''
        })
        .state('root.work.confirmBox', {
            templateUrl: 'templates/confirmBox.html'
        })
        //   .state('root.work', {
        //     resolve:{
        //      "check": function($location,$rootScope){
        //          if(!$rootScope.loginIn){
        //            $location.path('/login.html')
        //          }
        //      }
        //     },
        //     url: '/root',
        //     templateUrl: 'templates/root.html',
        //     controller: 'work'
        // })

    .state('404', {
            url: '/404',
            templateUrl: 'templates/404.html'
        })
        // nested list with custom controller
});

dashBoard.run(function($rootScope) {
    $rootScope.edit = false;
});
