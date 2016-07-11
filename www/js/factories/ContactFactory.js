alsharq.factory('Contact', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            send: function(data){
                if (env == 'production') return $http.post(API.POST_CONTACT, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_CONTACT };
                        resolve(data);
                    });
                }
            }
        }
    }
]);
