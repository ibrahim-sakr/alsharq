alsharq.factory('Keyword', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            all:    function()       { return $http.get( API.KEYWORDS); },
            add:    function(content){ return $http.post(API.ADD_KEYWORD,    { 'content': content }); },
            remove: function(content){ return $http.post(API.REMOVE_KEYWORD, { 'content': content }); },
        }
    }
]);
