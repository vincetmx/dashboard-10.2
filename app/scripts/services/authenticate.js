'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

dashBoard.service('authenticateService', function($rootScope,$http,$location,sessionService) {
         $rootScope.loginIn=false;
        this.loginIn= function(username,password){
            $http({
            url: '/api/login',
            method: 'POST',
            data: {"userName":username,"password":password}
        }
        )
        .success(function(){ 
        $rootScope.loginIn=true;
        sessionService.setSession("id",username);
       $location.path('/root/work');})
        .error(function(){alert("incorrect credentials")});
        }

        this.logout = function(){
            sessionService.destroySession();
            $location.path('/login')            
        }
        this.islogged =function(){

        }

    });