/*
	Calls the api running to fetch the movie details. 
	*/

	detail.factory('apiService', function($http) {
		var apiService = {
			serviceCall: function(link,movie) {
				var promise = $http.get('/movie/'+link+'/'+movie).then(function (response) {
					var output=JSON.parse(response.data);
					return output;
				});
				return promise;
			}
		};
		return apiService;
	});


	detail.controller('detailCtrl', function($scope,apiService) {
		var movie = window.location.search.substring(1);
		apiService.serviceCall('specific',movie).then(function(output) {
			$scope.obj=output;
			$scope.imgsrc='http://image.tmdb.org/t/p/w500/'+ $scope.obj.results[0].backdrop_path;
		});   

		apiService.serviceCall('imdb',movie).then(function(output) {
			$scope.imdbobj=output;
		});   

		$scope.onclick =function(){
			var id=$scope.obj.results[0].id;
			apiService.serviceCall('video',id).then(function(objkey) {
				window.open('https://www.youtube.com/embed/'+objkey.results[0].key+'?vq=highres','_self');
			});
		}
	});
