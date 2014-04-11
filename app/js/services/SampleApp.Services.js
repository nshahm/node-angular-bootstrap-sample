angular.module('SampleApp.Services', [])
.factory('AngularService', ['$http', '$location','RestServiceUrls', function($http, $location, $RestServiceUrls) {
  
    return {
//        invoke : function (url, method, params, isArray) {
//            
//            var serviceCall = $resource(url, params);   
//            serviceCall.GET(method, 
//            
//            $resource(url, {}, {
//                query : { method : method, params : params, isArray }
//            }
//        },

        getListOfDirectives : function(callback) {
            
             $http({method: 'GET', url: '/app' + $RestServiceUrls.DirectiveService }).
                  success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    //  console.log(data);
                      
                      //callback();
                      callback(data);
                      //return data;
                  }).
                  error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                      console.log(data);
                      console.log(status);
                  });
        }
    }
}]);