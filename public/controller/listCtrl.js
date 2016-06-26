/*
	Calls the api to list the movies of a specific year.
*/
var pagecount=0;
list.controller('listCtrl', function($scope,$http,$attrs) {

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
		var item = $scope.MovieName;
		var link = 'http://127.0.0.1:8090/movie/list/'+year+'/'+pagecount;
		if (item != '') {
			$http({
				method : 'get',
				url : link
			}).then(function(response) {
				$scope.obj=(JSON.parse(response.data));
			});   
		}

	}
}); 
