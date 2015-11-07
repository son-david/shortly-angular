angular.module('shortly.links', [])

.controller('LinksController', ['$scope', function ($scope, Links) {
  console.log('-----------------------------------------------', $scope);
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks.then(function (link) {
      $scope.data.links = link.data;
    });
    console.log('brian kwon');
  };
  // $scope.getLinks = function(){
  //   return Links;
  // };
}]);
