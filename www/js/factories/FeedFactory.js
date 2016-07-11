alsharq.factory('Feed', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.GET_FEED, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_FEED };
                        resolve(data);
                    });
                }
            },
            subscribe: function(feed_id){
                if (env == 'production') return $http.post(API.POST_FEED, { 'feed_id' :feed_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_FEED };
                        resolve(data);
                    });
                }
            },
            notify: function(feed_id){
                if (env == 'production') return $http.post(API.POST_NOTIFY_FEED, { 'feed_id' :feed_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_NOTIFY_FEED };
                        resolve(data);
                    });
                }
            },
        }
    }
]);
