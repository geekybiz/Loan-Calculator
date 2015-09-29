angular.module("loanApp")
  .controller("loanAppCtrl", function($scope, bankService) {

    $scope.getInterest = function() {
      bankService.interest_rate().then(function(resp) {
        $scope.interest_rate = resp;
      });
    }();

    $scope.calculatePayment = function() {
      $scope.monthly_payment = $scope.principal + ($scope.principal * $scope.interest_rate * 4);
    };

  });
