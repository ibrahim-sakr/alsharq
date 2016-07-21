alsharq.factory('Country', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all:    function()   { return $http.get( API.GET_COUNTRIES); },
            own:    function()   { return $http.get( API.GET_MY_COUNTRIES); },
            add:    function(id) { return $http.post(API.POST_ADD_COUNTRY,    {ids: "[" + id + "]"}); },
            remove: function(id) { return $http.post(API.POST_REMOVE_COUNTRY, {ids: "[" + id + "]"}); },
        }
    }
]);
