alsharq.factory('Comment', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            count: function(id){
                // article id to get it's comments count
                if (env == 'production') return $http.get(API.COMMENTS_COUNT, { 'id': id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.COMMENTS_COUNT };
                        resolve(data);
                    });
                }
            },
            all: function(id){
                // article id to get it's comments
                if (env == 'production') return $http.get(API.COMMENTS, { 'id': id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.COMMENTS };
                        resolve(data);
                    });
                }
            },
            add: function(data){
                if (env == 'production') return $http.post(API.ADD_COMMENTS, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.ADD_COMMENTS };
                        resolve(data);
                    });
                }
            }
        }
    }
]);
