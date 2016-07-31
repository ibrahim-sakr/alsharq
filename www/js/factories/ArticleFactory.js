alsharq.factory('Article', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            newsFeed:       function(data)      { return $http.post(API.POST_NEWSFEED, data); },
            all:            function(page)      { return $http.get( API.GET_ARTICLES, { params: { page: page } }); },
            find:           function(article_id){ return $http.get( API.GET_ARTICLES, { params: { 'article_id' :article_id } }); },
            read:           function(article_id){ return $http.post(API.POST_ARTICLE_READ_COUNT,  { 'article_id' :article_id }); },
            share:          function(article_id){ return $http.post(API.POST_ARTICLE_SHARE_COUNT, { 'article_id' :article_id }); },
            favoriteAll:    function()          { return $http.get( API.FAVORITE_ARTICLES); },
            favoriteAdd:    function(article_id){ return $http.post(API.ADD_FAVORITE_ARTICLE,    { 'article_id' :article_id }); },
            favoriteRemove: function(article_id){ return $http.post(API.REMOVE_FAVORITE_ARTICLE, { 'article_id' :article_id }); },
            laterAll:       function()          { return $http.get( API.LATER_ARTICLES); },
            laterAdd:       function(article_id){ return $http.post(API.ADD_LATER_ARTICLE,       { 'article_id' :article_id }); },
            laterRemove:    function(article_id){ return $http.post(API.REMOVE_LATER_ARTICLE,    { 'article_id' :article_id }); }
        }
    }
]);
