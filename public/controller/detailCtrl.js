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
					$scope.imgsrc='http://image.tmdb.org/t/p/w500/'+ $scope.obj.results[0].backdrop_path;
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

		$scope.onclick =function(){
			var link = 'http://127.0.0.1:8090/movie/specific/'+movie;
			if (movie != '') {
				$http({
					method : 'get',
					url : link
				}).then(function(response) {
					var detail=(JSON.parse(response.data));
					var id=detail.results[0].id;
					var videolink='http://127.0.0.1:8090/movie/video/'+id;

					if(id!=''){
						$http({
							method : 'get',
							url : videolink
						}).then(function(response){
							objkey=JSON.parse(response.data);
							window.open('https://www.youtube.com/embed/'+objkey.results[0].key+'?vq=highres','_self');
						})
					}
				})
			}
		}
	}); 
