/*
	Calls the api running to fetch the movie details. 
*/
detail.controller('detailCtrl', function($scope,$http,$attrs) {
	var movie = window.location.search.substring(1);
	action();
	
	function action() {
		var link = 'http://127.0.0.1:8090/movie/specific/'+movie;
		var imdbLink= 'http://127.0.0.1:8090/movie/imdb/'+movie;
		if (movie != '') {
			$http({
				method : 'get',
				url : link
			}).then(function(response) {
				$scope.obj=(JSON.parse(response.data));
			});   
		}
		if (movie != '') {
			$http({
				method : 'get',
				url : imdbLink
			}).then(function(response) {
				$scope.imdbobj=(JSON.parse(response.data));
			});   
		}
	}
}); 
