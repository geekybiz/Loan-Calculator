angular.module("loanApp", ['ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/interest_rate', {
      templateUrl: 'public/js/services/homeTmpl.html',
      controller: ''
    }).otherwise({
      redirectTo: '/'
    });
  });
