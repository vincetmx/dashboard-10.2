'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
dashBoard.controller('overview', function($scope, getProfile, sessionService) {
    getProfile.returnProfile(sessionService.getSession($scope.username)).then(
        function mySuccess(response) {
            $scope.name = response.data.fullname;
        },
        function myError() {
            console.log("ERROR");
        });
	});