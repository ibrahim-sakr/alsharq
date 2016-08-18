alsharq.controller('RootController', [
    '$rootScope',
    '$scope',
    '$location',
    '$mdSidenav',
    'Subscription',
    'Storage',
    'Queue',
    'Popup',
    '$mdDialog',
    'Keyword',
    '$http',
    '$ionicSideMenuDelegate',
    function($rootScope, $scope, $location, $mdSidenav, Subscription, Storage, Queue, Popup, $mdDialog, Keyword, $http, $ionicSideMenuDelegate){
        $scope.shortcutSidebarContent = {};
        $scope.keywords = [];

        $scope.$user = function(){
            return JSON.parse( Storage.get('user') );
        };

        /**
         * check if there is an http request
         * used in loading bar
         * @return {Boolean}
         */
        $scope.isLoading = function(){
            return $http.pendingRequests.length > 0;
        };
        $scope.toggleLeft = function(){
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.toggleRight = function(){
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.goToFromLeft = function(page){
            $scope.toggleLeft();
            $location.path('/' + page);
        };
        $scope.goToFromRight = function(page){
            $scope.toggleRight();
            $location.path('/' + page);
        }

        $scope.appReady = function(){
            window.Loading.hide();
            console.log('app loaded');
        };

        $scope.back = function(){
            history.back();
        };

        $scope.logout = function(){
            navigator.notification.confirm(
                "Are you sure you want to logout!!!",
                function(index){
                    if (index == 2) return;

                    var logoutOptions = {
                        'model': 'Auth',
                        'method': 'logout',
                        'data': '',
                        'success': function(){
                            // $scope.closeSidebar('mainSidebar');
                            Storage.remove(['token', 'user']);
                            // redirect to login page
                            $location.path('/auth');
                        },
                        'error': function(e){
                            // show error message
                            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                        }
                    };
                    // start dequeuing
                    Queue.enqueue(logoutOptions);
                },
                "Logout",
                ["Logout", "Cancel"]
            )
        };

        $scope.addKeyword = function(){
            $scope.toggleRight();
            var confirm = $mdDialog.prompt()
                          .title('أضف كلمة مفتاحية')
                          .placeholder('الكلمة')
                          .ariaLabel('new keyword')
                          .ok('أضف')
                          .cancel('الغالء');

            $mdDialog.show(confirm).then(function(result) {
                Keyword.add(result).then(function(data){
                    $scope.keywords.push({'content': result});
                    $scope.loadSortcutSidebar();
                }, function(e){
                    Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
                });
            }, function() {
                // nothing to do
            });
        };

        $scope.loadSortcutSidebar = function(){
            if ( !$scope.$user() ) return;
            Subscription.filter().then(function(data){
                $scope.shortcutSidebarContent = data.data;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        }
        $scope.loadSortcutSidebar();

        $scope.goToCountry = function(name){
            $scope.toggleRight();
            $location.url('/feeds?country=' + name);
        };

        $scope.goToFeed = function(){
            var params = "?";
            for (var i = 0; i < $scope.shortcutSidebarContent.keywords.length; i++) {
                if ( $scope.shortcutSidebarContent.keywords[i].feed ) {
                    params += "keywords=" + $scope.shortcutSidebarContent.keywords[i].name + "&";
                }
            }
            params = params.slice(0, -1);
            $location.url('/feeds' + params);
            $scope.toggleRight();
        };
    }
]);
