/*
	factory method used by listCtrl for movie list.
    */

    list.factory('listFactory', function($http) {
       var listFactory = {
          factoryCall: function() {
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
     return listFactory;
 });
