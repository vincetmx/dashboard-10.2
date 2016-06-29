'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
dashBoard.controller('overview', function($scope, getProfile, sessionService) {
    var allthedata;
    var thisuser = sessionService.getSession("id");
    getProfile.returnProfile().then(
        function mySuccess(response) {
            allthedata = response;
            allthedata.data.profiles.forEach(function(item) {
                if (item.username == thisuser) {
                    $scope.nickname = item.nickname;
                    $scope.username = item.username;
                    $scope.profileimg = item.profileImage;
                }
            });
        },
        function myError() {
            console.log("ERROR");
        });
});
