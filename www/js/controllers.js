angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('landing',function($scope,$location,service_call)
{
  service_call.serv("https://csmonitoring-dev.azurewebsites.net/coyote/company.php").then(function(response){
  
     	//$scope.load2='false';

      $scope.items=response.data;
     // console.log($scope.items)
    })
$scope.register=function()
{
  //alert("i a here");
  $location.path('/register');
}
  
})

.controller('register',function($scope,service_call)
{

  
  
  service_call.serv("https://csmonitoring-dev.azurewebsites.net/coyote/company.php").then(function(response){
  
     	//$scope.load2='false';

      $scope.items=response.data;
      console.log($scope.items)
    })

  
})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
