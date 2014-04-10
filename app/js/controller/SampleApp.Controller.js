angular.module('SampleApp.Controller', [])
.controller('HeaderController', ['$scope', '$rootScope','GlobalSettings', function($scope, $rootScope,  $GlobalSettings) {
    
    $scope.appName = $GlobalSettings.APP_NAME;
    $rootScope.appName = $GlobalSettings.APP_NAME
    
}])
.controller('FooterController', ['$scope', 'GlobalSettings', function($scope, $GlobalSettings) {
    
    $scope.appTitle = $GlobalSettings.APP_TITLE;
    $scope.appAuthor = $GlobalSettings.APP_AUTHOR;
    $scope.appVersion = $GlobalSettings.APP_VERSION;
}])
.controller('MainController', ['$scope', function($scope) {
    
    $scope.nameList = ['pollachi','chennai','coimbatore','malayalam','madam'];
    
    $scope.filteredNameList = [];
}])
 

