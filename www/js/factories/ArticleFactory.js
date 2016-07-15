alsharq.factory('Article', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            newsFeed: function(data){
                if (env == 'production') return $http.post(API.POST_NEWSFEED, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_NEWSFEED };
                        resolve(data);
                    });
                }
            },
            all: function(data){
                if (env == 'production') return $http.get(API.GET_ARTICLES, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_ARTICLES };
                        resolve(data);
                    });
                }
            },
            read: function(article_id){
                if (env == 'production') return $http.post(API.POST_ARTICLE_READ_COUNT, { 'article_id' :article_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_ARTICLE_READ_COUNT };
                        resolve(data);
                    });
                }
            },
            share: function(article_id){
                if (env == 'production') return $http.post(API.POST_ARTICLE_SHARE_COUNT, { 'article_id' :article_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_ARTICLE_SHARE_COUNT };
                        resolve(data);
                    });
                }
            },
            favoriteAll: function(page){
                var page = page || 1;
                if (env == 'production') return $http.get(API.FAVORITE_ARTICLES, { 'page' :page });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.FAVORITE_ARTICLES };
                        resolve(data);
                    });
                }
            },
            favoriteAdd: function(article_id){
                if (env == 'production') return $http.post(API.ADD_FAVORITE_ARTICLE, { 'article_id' :article_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.ADD_FAVORITE_ARTICLE };
                        resolve(data);
                    });
                }
            },
            favoriteRemove: function(article_id){
                if (env == 'production') return $http.get(API.REMOVE_FAVORITE_ARTICLE, { 'article_id' :article_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.REMOVE_FAVORITE_ARTICLE };
                        resolve(data);
                    });
                }
            }
        }
    }
]);
