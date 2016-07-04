/*
	factory method used by detailCtrl to get movie details.
	*/
	sampleApp.factory('detailFactory', function($http) {
		var detailFactory = {
			factoryCall: function(link,movie) {
				var promise = $http.get('/movie/'+link+'/'+movie).then(function (response) {
					var output=JSON.parse(response.data);
					return output;
				});
				return promise;
			}
		};
		return detailFactory;
	});
	