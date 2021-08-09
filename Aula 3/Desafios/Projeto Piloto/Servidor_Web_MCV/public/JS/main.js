angular.module('app',['ngRoute', 'ngResource'])
  .config(function($routeProvider) {
   
   //The ngResource module provides interaction support with RESTful services via the $resource service.
    $routeProvider.when('/dispositivos', {
      templateUrl: 'partials/devices.html',
      controller: 'devices'
    });

    //  $routeProvider.otherwise({redirectTo:'/dispositivos'});
});