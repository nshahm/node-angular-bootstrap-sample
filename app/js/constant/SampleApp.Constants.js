/*

    Simple App level costants.
*/
angular.module('SampleApp.Constants', [])
.constant('GlobalSettings', {
    'APP_NAME': 'Sample App',
    'APP_AUTHOR':'Shahm Nattarshah',
    'APP_VERSION': '1.0',
    'APP_TITLE': 'Node JS , angular, bootstrap sample.'
})
.constant('RestServiceUrls', {
    'DirectiveService' : '/json/directives.json'
}); 