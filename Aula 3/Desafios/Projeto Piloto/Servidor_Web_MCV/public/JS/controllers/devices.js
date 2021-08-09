angular.module('app').controller('devices', 
function($scope, $http, $interval) {
 
$interval(callAtInterval, 3000);

function callAtInterval() {
    refresh();
}

    
var refresh = function() {
  $http.get('/devices').then(function(response) {
        console.log(response.data);
        $scope.devices = response.data;
       // $scope.unidade        = {texto: response.data.unidade};
        console.log("atualizou pagina");
        }, function(response) {
            // called asynchronously if an error occurs
          // or server returns response with an error status.
          //$scope.temperatura = {texto: 'Ocorreu um erro!!'};
      });
};


  // Simple POST request example (passing data) :
  $http.get('/devices').
      then(function(response) {
        $scope.devices = response.data;
           
          // this callback will be called asynchronously
          // when the response is available
        }, function(response) {
            // called asynchronously if an error occurs
          // or server returns response with an error status.
    //      $scope.temperatura = {texto: 'Ocorreu um erro!!'};
      });

});
