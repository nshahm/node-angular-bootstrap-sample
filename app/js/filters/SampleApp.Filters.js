angular.module('SampleApp.Filters', [])
.filter('palindrome', function() {
    return function(nameList, uppercase ) {
    
        var filteredData = [];
        angular.forEach(nameList, function(name) {

            // string reverse - not advisible for longer string data.
            var reversedValue = name.split('').reverse().join('');
            var data;
           
            if (angular.equals(name, reversedValue)) {
                data = name;
            }

            if (!angular.isUndefined(data) && uppercase) {
                data = data.toUpperCase();
            }
                       
            if (!angular.isUndefined(data)) {
                filteredData.push(data);
            }
        });
        
        return filteredData;
    }
})
               