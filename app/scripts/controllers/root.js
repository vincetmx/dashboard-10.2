'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in


dashBoard.controller("loginStatus", function($scope, getUser, authenticateService, sessionService) {
    getUser.returnUser(sessionService.getSession("id")).then(
        function mySuccess(response) {
            $scope.name = response.data.name;
        },
        function myError() {
            console.log("ERROR");
        });
    $scope.logout = function() {
        authenticateService.logout();
    }
    var mydate = new Date();
    // var current = mydate.getFullYear().toString() + "-" + (mydate.getMonth() + 1).toString() + "-" + mydate.getDate().toString();
    $scope.date = mydate;
});

dashBoard.controller("redirectPage", function($scope, $location) {
    $scope.toOverView = function() {
        $location.path('root/overview');
    }
    $scope.toWork = function() {
        $location.path('root/work');
    }
    $scope.toContact = function() {
        $location.path('root/contact');
    }
    $scope.toProducer = function() {
        $location.path('root/producer');
    }

    $scope.isActive = function(route) {
        return route === $location.path();
    }
});
