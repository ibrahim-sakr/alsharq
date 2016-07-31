alsharq.factory('Feed', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all:        function(data)   { return $http.get( API.GET_FEED,         { params: data}); },
            subscribe:  function(feed_id){ return $http.post(API.POST_FEED,        { 'feed_id' :feed_id }); },
            notify:     function(feed_id){ return $http.post(API.POST_NOTIFY_FEED, { 'feed_id' :feed_id }); },
        }
    }
]);
