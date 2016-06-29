'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button

dashBoard.directive('additemdirective', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/addDialog.html'
    };
})

.directive('edititemdirective', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/editDialog.html'
    };
})

.directive('deleteitemdirective', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/confirmBox.html'
    };
});
