// check Auth
// if Authed redirect to Home
// if Not redirect to Login
alsharq.config([
    '$compileProvider',
    '$httpProvider',
    '$mdThemingProvider',
    'admobSvcProvider',
    function($compileProvider, $httpProvider, $mdThemingProvider, admobSvcProvider){

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
            '500': '2B4461',
        });

        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('alsharqTheme', alsharqPallete);

        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default').primaryPalette('alsharqTheme');

        // Optionally you can configure the options here:
        admobSvcProvider.setOptions({
            publisherId:          "pub-5044923081076791",
            interstitialAdId:     "ca-app-pub-5044923081076791/1925090666",
            autoShowBanner:       true,
            autoShowInterstitial: true,
            bannerAtTop:          false,
            overlap:              false,
        });
    }
]);

alsharq.run([
    '$rootScope',
    '$route',
    '$location',
    'Title',
    'admobSvc',
    function($rootScope, $route, $location, Title, admobSvc) {
        admobSvc.createBannerView();

        $rootScope.$on(admobSvc.events.onAdOpened, function onAdOpened(evt, e) {
            console.log('adOpened: type of ad:' + e.adType);
        });

        $rootScope.$on('$routeChangeSuccess', function (){
            if ($route.current.$$route) {
                var paths = ["/auth", "/auth/register", "/auth/login", "/auth/reset"];
                if (paths.indexOf( $route.current.$$route.originalPath ) == -1) {
                    // check if user signin
                    var token = window.localStorage.getItem('token');
                    if (!token) {
                        $location.path('/auth');
                    }
                }
                $rootScope.pageTitle = Title[$route.current.$$route.controller];
                $rootScope.isHome    = $route.current.$$route.controller == 'HomeController';

                var authControllers = ['AuthController', 'LoginController', 'RegisterController', 'ResetPasswordController'];
                $rootScope.isAuth = authControllers.indexOf( $route.current.$$route.controller ) > -1;

            }
        });
    }
]);
