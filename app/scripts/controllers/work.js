'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
dashBoard.controller('work', function($scope, $http) {
    $http({
        method: "GET",
        url: "/api/work"
    }).then(function mySuccess(response) {
        $scope.works = response.data.works;
    }, function myError(response) {
        console.log("ERROR");
    });


    $scope.addItems = function() {
        var newItem = {
            title: $scope.addtitle,
            author: $scope.addAuthor,
            like: $scope.addLike,
            comment: $scope.addComment,
            image: ''
        }
        $scope.works.push(newItem);
    };
});
