angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks().then(function (link) {
      $scope.data.links = link.data;
    });
  };
  $scope.getLinks();
  // $scope.getLinks = function(){
  //   return Links;
  // };
}]);
