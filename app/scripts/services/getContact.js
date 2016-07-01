'use strict';
// GETCONTACT SERVICE
// Description: Define the contactService that has 2 functionalities: getLocation and getCategory 
dashBoard.service('contactService', function($http) {
    this.getLocation = function() {
        return $http({
            url: '/api/location',
            method: 'GET'
        })
    }
    this.getCategory = function() {
        return $http({
            url: '/api/category',
            method: 'GET'
        })
    }
});