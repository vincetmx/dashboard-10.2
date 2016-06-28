'use strict';
// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information
dashBoard.service('getUser', function($http) {

         this.returnUser= function(name){
        return $http({
            url: '/api/getuser',
            method: 'GET',
            params:{'user': name}
        })
}

});