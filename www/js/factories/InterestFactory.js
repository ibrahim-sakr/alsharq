alsharq.factory('Interest', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all:    function(page){ return $http.get( API.GET_INTERESTS); },
            own:    function(page){ return $http.get( API.GET_MY_INTERESTS); },
            add:    function(ids) { return $http.post(API.POST_ADD_INTEREST,    { 'ids' :[ids] }); },
            remove: function(ids) { return $http.post(API.POST_REMOVE_INTEREST, { 'ids' :[ids] }); },
        }
    }
]);
