/*
	Calls the api running to fetch the movie details. 
	*/

	detail.controller('detailCtrl', function($scope,detailFactory) {
		var movie = window.location.search.substring(1);
		detailFactory.factoryCall('specific',movie).then(function(output) {
			$scope.obj=output;
			$scope.imgsrc='http://image.tmdb.org/t/p/w500/'+ $scope.obj.results[0].backdrop_path;
		});   

		detailFactory.factoryCall('imdb',movie).then(function(output) {
			$scope.imdbobj=output;
		});   

		$scope.onclick =function(){
			var id=$scope.obj.results[0].id;
			detailFactory.factoryCall('video',id).then(function(objkey) {
				window.open('https://www.youtube.com/embed/'+objkey.results[0].key+'?vq=highres','_self');
			});		
		}
	});
	