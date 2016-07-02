/*
	Calls the api to list the movies of a specific year.
	*/
	var pagecount=0;
	list.controller('listCtrl', function($scope,$timeout,listFactory) {
		listFactory.factoryCall().then(function(output) {
			console.log(output);
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
