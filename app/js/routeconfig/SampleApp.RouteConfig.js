angular.module("SampleApp.Config", ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl : 'view/content.html',
        controller : 'MainController'
    })
    .when('/', {
        templateUrl : 'view/welcome.html'
    })
    .otherwise({
        redirectTo : 'app/app.html'
    })
}])