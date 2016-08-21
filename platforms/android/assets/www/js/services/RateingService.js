alsharq.service('Rate', [
    '$mdDialog',
    function($mdDialog) {
        this.show = function(ev) {
            var confirm = $mdDialog.confirm()
                  .title('هل اعجبك هذا التطبيق?')
                  .textContent('ساعدنا في تحسينة, قم بالتقييم الان!.')
                  .ariaLabel('هل اعجبك هذا التطبيق')
                  .targetEvent(ev)
                  .ok('نعم')
                  .cancel('لا');
            $mdDialog.show(confirm).then(function() {
                console.log('yes');
            }, function() {
                console.log('no');
            });
        };
    }
]);
