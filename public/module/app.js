var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/index', {
			templateUrl: './../index.html',
			controller: 'indexCtrl'
		}).
		when('/list/:year/:pagecount',{
			templateUrl: './../list.html',
			controller: 'listCtrl'
		}).
		when('/detail/:org_title',{
			templateUrl: './../movie-details.html',
			controller: 'detailCtrl'
		}).
		otherwise({
			redirectTo: '/index'
		});
	}
	]);
