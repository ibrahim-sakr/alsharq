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
    function($rootScope, $scope, $location, $mdSidenav, Subscription, Storage, Queue, Popup, $mdDialog, Keyword, $http){
        $scope.shortcutSidebarContent = {};
        $scope.keywords = [];
        $scope.$user = JSON.parse( Storage.get('user') );

        /**
         * check if there is an http request
         * used in loading bar
         * @return {Boolean}
         */
        $scope.isLoading = function(){
            return $http.pendingRequests.length > 0;
        };

        $scope.goTo = function(page){
            $location.path('/' + page);
            $scope.closeSidebar('mainSidebar');
            $scope.closeSidebar('shortcutSidebar');
        };

        $scope.appReady = function(){
            window.Loading.hide();
            console.log('app loaded');
        };

        $scope.back = function(){
            history.back();
        };

        $scope.openSidebar = function(id){
            if (!$rootScope.isAuth) {
                var sidebars = ['mainSidebar', 'shortcutSidebar'];
                sidebars.splice( sidebars.indexOf(id) , 1);
                $mdSidenav(sidebars[0]).close();
                $mdSidenav(id).open();
            }
        };

        $scope.closeSidebar = function(id){
            $mdSidenav(id).close();
        };

        $scope.logout = function(){
            var logoutOptions = {
                'model': 'Auth',
                'method': 'logout',
                'data': '',
                'success': function(){
                    $scope.closeSidebar('mainSidebar');
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

        };

        $scope.addKeyword = function(){
            $scope.closeSidebar('shortcutSidebar');
            var confirm = $mdDialog.prompt()
                          .title('أضف كلمة مفتاحية')
                          .placeholder('الكلمة')
                          .ariaLabel('new keyword')
                          .ok('أضف')
                          .cancel('الغلء');

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

        $scope.exit = function(){
            navigator.app.exitApp();
        };

        $scope.loadSortcutSidebar = function(){
            if ( !$scope.$user ) return;
            Subscription.filter().then(function(data){
                $scope.shortcutSidebarContent = data.data;
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        }
        $scope.loadSortcutSidebar();

        $scope.goToCountry = function(name){
            $location.url('/feeds?country=' + name);
            $scope.closeSidebar('shortcutSidebar');
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
            $scope.closeSidebar('shortcutSidebar');
        };
    }
]);
