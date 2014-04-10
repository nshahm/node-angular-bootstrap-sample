angular.module('SampleApp.Directives', [])
.directive('applicationVersion', function() {
    return {
        restrict : 'AE',
        template : '<h3> {{ appVersion  }} </h3>'
    }
})
.directive('sampleappHeader', function() {
    
    return {
        restrict : 'E',
        templateUrl : 'view/header.html',
        scope : {
            applicationName: '@'
        }
    }
})
