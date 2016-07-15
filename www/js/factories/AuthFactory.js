alsharq.factory('Auth', [
    '$http',
    '$q',
    'API',
    'testData',
    function($http, $q, API, testData){

        return {
            register: function(data){
                if (env == 'production') return $http.post(API.POST_REGISTER, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_REGISTER };
                        resolve(data);
                    });
                }
            },
            
            social: function(data){
                if (env == 'production') return $http.post(API.POST_SOCIAL_LOGIN, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_SOCIAL_LOGIN };
                        resolve(data);
                    });
                }
            },
            
            login: function(data){
                if (env == 'production') return $http.post(API.POST_LOGIN, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_LOGIN };
                        resolve(data);
                    });
                }
            },
            loginGuest: function(device_id){
                if (env == 'production') return $http.post(API.POST_GUEST_LOGIN, { 'device_id': device_id });
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_GUEST_LOGIN };
                        resolve(data);
                    });
                }
            },

            logout: function(){
                if (env == 'production') return $http.post(API.POST_LOGOUT);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_LOGOUT };
                        resolve(data);
                    });
                }
            },

            resetPassword: function(email){
                if (env == 'production') return $http.post(API.POST_RESET_PASSWORD, email);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_RESET_PASSWORD };
                        resolve(data);
                    });
                }
            },

            getProfile: function(){
                if (env == 'production') return $http.get(API.GET_PROFILE);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.GET_PROFILE };
                        resolve(data);
                    });
                }
            },

            updateProfile: function(data){
                if (env == 'production') return $http.post(API.POST_PROFILE, data);
                if (env == 'development') {
                    return $q(function(resolve, reject) {
                        var data = { "data": testData.POST_PROFILE };
                        resolve(data);
                    });
                }
            }
        }
    }
]);
