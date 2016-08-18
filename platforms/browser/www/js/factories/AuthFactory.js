alsharq.factory('Auth', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            register:      function(data)     { return $http.post(API.POST_REGISTER, data); },
            login:         function(data)     { return $http.post(API.POST_LOGIN, data); },
            loginGuest:    function(device_id){ return $http.post(API.POST_GUEST_LOGIN, { "device_id": device_id }); },
            logout:        function()         { return $http.post(API.POST_LOGOUT); },
            getProfile:    function()         { return $http.get( API.PROFILE); },
            updateProfile: function(data)     { return $http.post(API.PROFILE, data); },
            social:        function(data)     { return $http.post(API.POST_SOCIAL_LOGIN, data); },
            resetPassword: function(email)    { return $http.post(API.POST_RESET_PASSWORD, { "email": email }); },
        }
    }
]);
