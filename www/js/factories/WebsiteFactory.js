alsharq.factory('Website', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){ return $http.get(API.GET_WEBSITES, { params: { page: page } }); }
        }
    }
]);
