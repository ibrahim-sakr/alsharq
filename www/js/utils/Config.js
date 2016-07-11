// check Auth
// if Authed redirect to Home
// if Not redirect to Login
alsharq.config([
    '$compileProvider',
    '$httpProvider',
    '$mdThemingProvider',
    function($compileProvider, $httpProvider, $mdThemingProvider){

        // disable debug in angular to increase performance
        $compileProvider.debugInfoEnabled(false);

        $httpProvider.interceptors.push([
            '$q',
            '$location',
            function ($q, $location) {
                return {
                    'request': function(config) {
                        // window.localStorage.setItem("key", "value");
                        // window.localStorage.getItem("key");
                        // window.localStorage.removeItem("key");
                        // window.localStorage.clear();
                        // var keyName = window.localStorage.key(0);
                        var token = window.localStorage.getItem("token");
                        config.headers = config.headers || {};
                        if (token) config.headers.Authorization = "Token " + token;

                        return config;
                    },
                    'response': function(response){
                        // check if response come with token in session
                        return response;
                    },
                    'requestError': function(rejection) {
                        return $q.reject(rejection);
                    },
                    'responseError': function (rejection) {
                        if (rejection.status === 401 || rejection.status === 403) {
                            // Do some kind of redirect to login page here...
                        }
                        return $q.reject(rejection);
                    }
                };
            }
        ]);

        // Extend the red theme with a few different colors
        var alsharqPallete = $mdThemingProvider.extendPalette('indigo', {
            // '50': 'ffebee',
            // '100': 'ffcdd2',
            // '200': 'ef9a9a',
            // '300': 'e57373',
            // '400': 'ef5350',
            '500': '2B4461',
            // '600': 'e53935',
            // '700': 'd32f2f',
            // '800': 'c62828',
            // '900': 'b71c1c',
            // 'A100': 'ff8a80',
            // 'A200': 'ff5252',
            // 'A400': 'ff1744',
            // 'A700': 'd50000',
            // 'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                   // on this palette should be dark or light
            // 'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            // '200', '300', '400', 'A100'],
            // 'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('alsharqTheme', alsharqPallete);

        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default').primaryPalette('alsharqTheme');

    }
]);

alsharq.run(function($rootScope, $route, Title) {
    $rootScope.$on('$routeChangeSuccess', function () {
        if ($route.current.$$route) {
            $rootScope.pageTitle = Title[$route.current.$$route.controller];
            $rootScope.isHome    = $route.current.$$route.controller == 'HomeController';
        }
    })
});
