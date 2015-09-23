var app = angular.module('msNGr', []);

app.controller('HeaderController', ['$scope', function($scope){
    $scope.title = "msNGr",
    $scope.tagLine = "Facebook combined with Twitter... but not really"
}]);

app.controller("MessageController", ['$scope', function($scope){
  $scope.messages =
  [
    {
      user: 'Tom',
      date: new Date('2015', '09', '09'),
      image: 'http://i.dailymail.co.uk/i/pix/2014/07/05/article-2681224-1F678F7A00000578-381_634x843.jpg',
      text: 'Backbone is lame',
      likes: 0
    },
    {
      user: 'James',
      date: new Date('2015', '09', '09'),
      image: 'http://www.wrywingpolitics.com/wp-content/uploads/2012/12/Spine.png',
      text: 'Tom is lame. react+backbone 4 lyfeeeee',
      likes: 0
    },
    {
      user: 'Tristan',
      date: new Date('2015', '09', '09'),
      image: 'http://cdn2.holytaco.com/wp-content/uploads/images/2009/12/Cat_FAIL-1.jpg',
      text: 'I\'m lame',
      likes: 0
    }
  ],
  $scope.plusLike = function(index) {
    $scope.messages[index].likes += 1;
  };
  $scope.minusLike = function(index) {
    $scope.messages[index].likes -= 1;
  }
}]);
