'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

dashBoard.controller("loginCtrl", function($rootScope,$scope, authenticateService, sessionService, $location) {

    $scope.submit = function() {
        console.log($scope.username);
        authenticateService.loginIn($scope.username, $scope.password)
            .success(function() {
                $rootScope.loginIn = true;
                sessionService.setSession("id", $scope.username);
                $location.path('/root/work');
            })
            .error(function() {
                $scope.login_error = false;
            });
    }
});
