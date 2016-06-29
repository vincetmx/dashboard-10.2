'use strict';
// SESSION SERVICE
// Description: Define the sessionService that has 3 functionalities: 
// get, set, and destroy for users' data in the session storage
dashBoard.service('sessionService',function(){
        this.setSession = function(key,value)
        {
            sessionStorage.setItem(key,value);
        }
        this.getSession =function(key)
        {
            return sessionStorage.getItem(key);
        }
        this.destroySession =function()
        {
            sessionStorage.clear();
        }
    });