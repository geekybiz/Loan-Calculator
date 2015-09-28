angular.module("loanApp")

.service("bankService", function($http){

  this.interest_rate = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:8080/interest_rate'
    }).then(function(res){
        console.log(res);
      return res.data
    })
  }

});
