alsharq.factory('Keyword', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.KEYWORDS, { 'page': page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.KEYWORDS };
                        resolve(data);
                    });
                }
            },
            add: function(content){
                if (env == 'production') return $http.post(API.ADD_KEYWORD, { 'content': content });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.ADD_KEYWORD };
                        resolve(data);
                    });
                }
            },
            remove: function(content){
                if (env == 'production') return $http.post(API.REMOVE_KEYWORD, { 'content': content });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.REMOVE_KEYWORD };
                        resolve(data);
                    });
                }
            },
        }
    }
]);
