// check Auth
// if Authed redirect to Home
// if Not redirect to Login
alsharq.config([
    '$compileProvider',
    '$httpProvider',
    '$mdThemingProvider',
    '$ionicConfigProvider',
    function($compileProvider, $httpProvider, $mdThemingProvider, $ionicConfigProvider){

        // disable debug in angular to increase performance
        $compileProvider.debugInfoEnabled(false);

        $httpProvider.interceptors.push([
            '$q',
            '$location',
            'Storage',
            function ($q, $location, Storage) {
                return {
                    'request': function(config) {
                        var token = Storage.get("token");
                        config.headers = config.headers || {};
                        config.headers['Authorization'] = "token " + token;
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
                            Storage.remove(['token', 'user']);
                            $location.path('/auth');

                            navigator.notification.alert(
                                "حدث حطأ من فضلك سجل دخولك مرة اخري!!!",
                                function(index){
                                    console.log('loged out');
                                },
                                "خطأ!!",
                                "اغلاق"
                            )
                        }
                        return $q.reject(rejection);
                    }
                };
            }
        ]);

        // Extend the red theme with a few different colors
        var alsharqPallete = $mdThemingProvider.extendPalette('indigo', {
            '500': '2B4461',
        });

        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('alsharqTheme', alsharqPallete);

        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default').primaryPalette('alsharqTheme');

        $ionicConfigProvider.tabs.position('top');
    }
]);

alsharq.run([
    '$rootScope',
    '$route',
    '$location',
    'Title',
    function($rootScope, $route, $location, Title) {
        $rootScope.$on('$routeChangeSuccess', function (){
            if ($route.current.$$route) {
                var authControllers  = ['AuthController', 'LoginController', 'RegisterController', 'ResetPasswordController'];
                $rootScope.pageTitle = Title[$route.current.$$route.controller];
                $rootScope.isHome    = $route.current.$$route.controller == 'HomeController';
                $rootScope.isAuth    = authControllers.indexOf( $route.current.$$route.controller ) > -1;

            }
        });
    }
]);
