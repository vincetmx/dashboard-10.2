'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
dashBoard.controller("TabCtrl", function($scope, contactService,$window) {
    // var userInfo =""; 
         contactService.getLocation()
        .then(
            function mySuccess(response) {
                $scope.locations = response.data.locations;
                $scope.selected = $scope.locations[0];
            },
            function myError() {
                console.log("ERROR");
            });
    contactService.getCategory()
        .then(
            function mySuccess(response) {
                $scope.categories = response.data.categories;
                $scope.selected = $scope.categories[0];
            },
            function myError() {
                console.log("ERROR");
            });
        $scope.myform = {};
        $scope.active = 1;
        $scope.altActive=function(index){
            $scope.active = index;
        }
         $scope.currentTime = new Date();
       });
dashBoard.controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
    $scope.myform.priority = $scope.percent;
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
});