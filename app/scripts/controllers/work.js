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

    $scope.editItems = function(item) {
        $scope.editIndex = -1;
        $scope.editIndex = $scope.works.indexOf(item);
        $scope.edittitle = item.title;
        $scope.editAuthor = item.author;
        $scope.editLike = item.like;
        $scope.editComment = item.comment;
    };

    $scope.editConfirm = function() {
        var i = $scope.editIndex;
        $scope.works[i].author = $scope.editAuthor;
        $scope.works[i].title = $scope.edittitle;
        $scope.works[i].like = $scope.editLike;
        $scope.works[i].comment = $scope.editComment;
    };

    $scope.deleteItem = function(item) {
        $scope.removeIndex = -1;
        $scope.removeIndex = $scope.works.indexOf(item);
    };

    $scope.deleteConfirm = function() {
        $scope.works.splice($scope.removeIndex, 1);
    };
});
