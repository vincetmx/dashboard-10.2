'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile
// dashBoard.service('getProfile', function($http) {
//     this.returnProfile = function() {
//         return $http({
//             url: '/api/profile',
//             method: 'GET'
//         });
//     };
// });


dashBoard.factory('getProfile', function($http) {
    return {
        returnProfile: function() {
            var promise = $http({
                url: '/api/profile',
                method: 'GET'
            });
            return promise;
        }
    }
});
