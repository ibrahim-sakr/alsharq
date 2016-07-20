alsharq.factory('Contact', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            send: function(data){ return $http.post(API.POST_CONTACT, data); }
        }
    }
]);
