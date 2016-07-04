/*
	Calls the api running to fetch the movie details. 
	*/

	sampleApp.controller('detailCtrl', function($scope,$routeParams,$location,detailFactory) {
		var movie = $routeParams.org_title;
		detailFactory.factoryCall('specific',movie).then(function(output) {
			output=JSON.parse(output);
			$scope.obj=output;
			$scope.imgsrc='http://image.tmdb.org/t/p/w500/'+ $scope.obj.results[0].backdrop_path;
		});   

		detailFactory.factoryCall('imdb',movie).then(function(output) {
			output=JSON.parse(output);
			$scope.imdbobj=output;
		});   

		//Show the trailer of the movie.
		$scope.onclick =function(){
			var id=$scope.obj.results[0].id;
			detailFactory.factoryCall('video',id).then(function(objkey) {
				objkey=JSON.parse(objkey);
				window.open('https://www.youtube.com/embed/'+objkey.results[0].key+'?vq=highres','_self');
			});		
		}
	});
	