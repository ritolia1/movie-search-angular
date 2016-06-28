/*
	Calls the api to list the movies of a specific year.
	*/
	var pagecount=0;
	list.controller('listCtrl', function($scope,$http,$attrs,$timeout) {

		var query = window.location.search.substring(1);
		var vars = query.split('/');
		pagecount=vars[1];
		year=vars[0];
		action();

		$scope.decrese =function(){
			pagecount--;
			if (pagecount<=0) {
				pagecount=1;
			};
			window.open('list.html?'+year+'/'+pagecount,'_self');
			action();
		}

		$scope.increse = function(){
			pagecount++;
			window.open('list.html?'+year+'/'+pagecount,'_self');
			action();
		} 

		$scope.onclick =function(){
			window.open('movie-details.html?'+this.val.original_title,'_self');
		}

		function action() {
			var link = '/movie/list/'+year+'/'+pagecount;
			if (year != '') {
				$http({
					method : 'get',
					url : link
				}).then(function(response) {
					var output=JSON.parse(response.data);
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
			}
		}
	}); 
