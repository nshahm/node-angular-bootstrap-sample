angular.module("SampleApp.Config", ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/directive', {
        templateUrl : 'view/directive.html',
        controller : 'DirectiveController'
    })
    .when('/', {
        templateUrl : 'view/welcome.html'
    })
    .when('/filters', {
        templateUrl : 'view/filter.html',
        controller : 'FilterController'
    })
    .otherwise({
        redirectTo : 'app/app.html'
    })
}])