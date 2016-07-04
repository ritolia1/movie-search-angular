/*
	Calls the api to list the movies of a specific year.
	*/
	sampleApp.controller('listCtrl', function($scope,$timeout,$routeParams,$location,listFactory) {
		year = $routeParams.year;
		page = $routeParams.pagecount;
		listFactory.factoryCall(year,page).then(function(output) {
			output=JSON.parse(output);
			if ( (output.status_code == 11 ) ||(output.results==null) ||(output.results.length ==0) ) {
				$scope.buttonVisibility='true';
				$scope.alertVisibility='true';
				$scope.errorMessage="Not a valid Year for movies or Page."; 
				$timeout(function() {
					$location.path('/index');
				}, 2000);	 
			}
			else {
				$scope.obj=output;
			}
		}); 

		//Decrease the page count
		$scope.decrese =function(){
			pagecount = $routeParams.pagecount;
			pagecount--;
			if (pagecount<=0) {
				pagecount=1;
			};
			$location.path('/list/'+ year+'/'+pagecount);
		}

		//Increase the page count
		$scope.increse = function(){
			pagecount = $routeParams.pagecount;
			pagecount++;
			$location.path('/list/'+ year+'/'+pagecount);
		} 

		//Begin new search.
		$scope.check = function () {
			$location.path('/list/'+ $scope.MovieName+'/1');
		}

		//Check the detail of the movie.
		$scope.onclick =function(){
			$location.path('/detail/'+this.val.original_title);
		}
	}); 

	sampleApp.directive('ngEnter', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$apply(function (){
						scope.$eval(attrs.ngEnter);
					});
					
					event.preventDefault();
				}
			})
		}
	});
