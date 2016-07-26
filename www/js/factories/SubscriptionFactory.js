alsharq.factory('Subscription', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all:    function(page){ return $http.get(API.GET_SUBSCRIPERS, { 'page' :page }); },
            filter: function()    { return $http.get(API.GET_SUBSCRIPTION_FILTER); },
        }
    }
]);
