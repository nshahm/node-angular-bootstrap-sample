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
    .when('/filters', {
        templatUrl : 'view/content.html',
        controller : 'MainController'
    })
    .otherwise({
        redirectTo : 'app/app.html'
    })
}])