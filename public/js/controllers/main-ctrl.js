angular.module("loanApp")
  .controller("loanAppCtrl", function($scope, bankService) {

    $scope.getInterest = function() {
    bankService.interest_rate().then(function(resp) {
      $scope.interest_rate = resp;
    });
  }();
  });
