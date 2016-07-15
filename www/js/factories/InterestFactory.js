alsharq.factory('Interest', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.GET_INTERESTS, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_INTERESTS };
                        resolve(data);
                    });
                }
            },
            own: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.GET_MY_INTERESTS, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_MY_INTERESTS };
                        resolve(data);
                    });
                }
            },
            add: function(ids){
                // ids = comma separated interest id
                if (env == 'production') return $http.post(API.POST_ADD_INTEREST, { 'ids' :ids });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_ADD_INTEREST };
                        resolve(data);
                    });
                }
            },
            remove: function(ids){
                // ids = comma separated interest id
                if (env == 'production') return $http.post(API.POST_REMOVE_INTEREST, { 'ids' :ids });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_REMOVE_INTEREST };
                        resolve(data);
                    });
                }
            },
        }
    }
]);
