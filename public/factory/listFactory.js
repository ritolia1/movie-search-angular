/*
    factory method used by listCtrl for movie list.
    */
    
    sampleApp.factory('listFactory', function($http) {
    	var listFactory = {
    		factoryCall: function(year,pagecount) {
    			var promise = $http.get('/movie/list/'+year+'/'+pagecount).then(function (response) {
    				var output=JSON.parse(response.data);
    				return output;
    			});
    			return promise;
    		}
    	};
    	return listFactory;
    });
