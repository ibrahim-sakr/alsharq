alsharq.factory('Country', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.GET_COUNTRIES, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_COUNTRIES };
                        resolve(data);
                    });
                }
            },
            myCountries: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.GET_MY_COUNTRIES, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_MY_COUNTRIES };
                        resolve(data);
                    });
                }
            },
            add: function(ids){
                // ids = comma separated country id
                if (env == 'production') return $http.post(API.POST_ADD_COUNTRY, { 'ids' :ids });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_ADD_COUNTRY };
                        resolve(data);
                    });
                }
            },
            remove: function(ids){
                // ids = comma separated country id
                if (env == 'production') return $http.post(API.POST_REMOVE_COUNTRY, { 'ids' :ids });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_REMOVE_COUNTRY };
                        resolve(data);
                    });
                }
            },
        }
    }
]);
