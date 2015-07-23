'use strict';

require('angular/angular');
require('angular-route');

var settingsApp = angular.module('settingsApp', ['ngRoute']);

//services
require('./services/resourceService.js')(settingsApp);

//controllers
require('./settings/controllers/settingsController.js')(settingsApp);

//directives
require('./settings/directives/newSettingDirective')(settingsApp);

//routeProvider
require(....)(app);


//New file
module.exports = function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/shit', {
			templateUrl: '/templates/settings/directives/new_settings_template.html',
			controller: 'settingsController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
}
