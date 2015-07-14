var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
  var posts = [],
    i;

  for (i = 0; i < 5; i++) {
    posts.push({
      title: 'post ' + (i + 1),
      upVotes: Math.floor(Math.random() * 100) + 1
    })
  }

  $scope.posts = posts;

  $scope.addPost = function () {
    if (!$scope.title || $scope.title === '') {
      return;
    }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upVotes: 0
    });
    $scope.title = '';
  };

  $scope.incrementUpVotes = function (post) {
    post.upVotes += 1;
  }

}]);