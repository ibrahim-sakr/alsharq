alsharq.controller('OwnKeywordsController', [
    '$scope',
    '$mdDialog',
    'Keyword',
    'Popup',
    'Admob',
    function($scope, $mdDialog, Keyword, Popup, Admob){
        Admob.show();
        $scope.new;

        Keyword.all().then(function(data){
            $scope.$parent.keywords = data.data.results;
        }, function(e){
            Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
        });

        $scope.remove = function(content, index){
            Keyword.remove(content).then(function(data){
                $scope.$parent.keywords.splice(index, 1);
            }, function(e){
                Popup.showError('حدث خطأ اثناء التحميل, حاول مرة أخرى.');
            });
        };
    }
]);
