'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile
dashBoard.service('getProfile', function($http) {

         this.returnProfile= function(name){
        return $http({
            url: '/api/profile',
            method: 'GET',
            params:{'fullname': name}
        })
}

});