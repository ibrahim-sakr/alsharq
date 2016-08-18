alsharq.filter('time', [
    'Time',
    function(Time) {
        return function(input) {
            return Time.format(input);
        }
    }
]);
