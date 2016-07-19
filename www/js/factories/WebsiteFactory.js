alsharq.factory('Website', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){
                var page = page || 1;
                return $http.get(API.GET_WEBSITES, { 'page' :page });
            }
        }
    }
]);
