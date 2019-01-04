(function () {
'use strict';

angular.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController($scope) {
  $scope.firstName = "Yaakov";
  // // "fullName" initialized as an empty string
  // $scope.fullName = "";

  $scope.showNumberOfWatchers = function () {
    // Shows us the number of watchers in the digest cycle
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };

  $scope.setFullName = function () {
    //This will take the property "firstName" and combine it with an empty string and "Chaikin"
    $scope.fullName = $scope.firstName + " " + "Chaikin";
  };

  $scope.logFirstName = function () {
    console.log("First name is: ", $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log("Full name is: ", $scope.fullName);
  };
}

})();
