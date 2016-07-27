alsharq.filter('html', [
    function() {
        return function(input) {
            var tmp = document.createElement("DIV");
                tmp.innerHTML = input;
            return tmp.textContent || tmp.innerText || input;
        }
    }
]);
