/*
	Calls the api to list the movies of a specific year.
	*/

	list.factory('apiService', function($http) {
		var apiService = {
			serviceCall: function() {
				var query = window.location.search.substring(1);
				var vars = query.split('/');
				pagecount=vars[1];
				year=vars[0];
				var promise = $http.get('/movie/list/'+year+'/'+pagecount).then(function (response) {
					var output=JSON.parse(response.data);
					return output;
				});
				return promise;
			}
		};
		return apiService;
	});

	var pagecount=0;
	list.controller('listCtrl', function($scope,$timeout,apiService) {
		apiService.serviceCall().then(function(output) {
			if ( (output.status_code == 11 ) ||(output.results==null) ||(output.results.length ==0) ) {
				$scope.buttonVisibility='true';
				$scope.alertVisibility='true';
				$scope.errorMessage="Not a valid Year for movies or Page."; 
				$timeout(function() {
					$scope.errorMessage="Redirecting to home page.";	
				}, 2000);
				$timeout(function() {
					window.open('../index.html','_self');	
				}, 4000);	 
			}
			else {
				$scope.obj=output;
			}
		}); 

		$scope.decrese =function(){
			pagecount--;
			if (pagecount<=0) {
				pagecount=1;
			};
			window.open('list.html?'+year+'/'+pagecount,'_self');
		}

		$scope.increse = function(){
			pagecount++;
			window.open('list.html?'+year+'/'+pagecount,'_self');
		} 

		$scope.onclick =function(){
			window.open('movie-details.html?'+this.val.original_title,'_self');
		}
	}
	); 
