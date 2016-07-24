alsharq.factory('Subscription', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.GET_SUBSCRIPERS, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_SUBSCRIPERS };
                        resolve(data);
                    });
                }
            },
            filter: function(){ return $http.get(API.GET_SUBSCRIPTION_FILTER); },
        }
    }
]);
