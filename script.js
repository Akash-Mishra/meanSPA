//script.js

// create the module and name it meanSPA
// also include ng-route for our routing needs
var meanSPA = angular.module('meanSPA', ['ngRoute']);

// configure our routes
meanSPA.config(function($routeProvider) {

  $routeProvider
    //route for home page
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })

    //route for the about page
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    })

    //route for contact page
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    });

});

//create the controller and inject angular's $scope

meanSPA.controller('mainController', function($scope) {
  // create a message to display in our controller
  $scope.message = 'Everyone come and see how good i look!';
});

meanSPA.controller('aboutController', function($scope) {
  $scope.message = 'Look, i am an about page';
});

meanSPA.controller('contactController', function($scope) {
  $scope.message = 'Contact us!. this is just a demo.';
});
