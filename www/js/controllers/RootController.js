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
    function($rootScope, $scope, $location, $mdSidenav, Subscription, Storage, Queue, Popup, $mdDialog, Keyword){
        $scope.shortcutSidebarContent = {};
        $scope.keywords = [];

        $scope.goTo = function(page){
            $location.path('/' + page);
            $scope.closeSidebar('mainSidebar')
        };

        /**
         * fires after all angular modules loaded.
         * it's like afterLoaded event.
         */
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
                    Popup.showError('there is an error, please try again.');
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
                    Popup.showError('there is an error, please try again.');
                });
            }, function() {
                // nothing to do
            });
        };

        $scope.exit = function(){
            navigator.app.exitApp();
        };

        $scope.loadSortcutSidebar = function(){
            Subscription.filter().then(function(data){
                $scope.shortcutSidebarContent = data.data;
            }, function(e){
                Popup.showError('there is an error, please try again.');
            });
        }
        $scope.loadSortcutSidebar();
    }
]);
