alsharq.service('Storage', [function(){
    /**
     * grab a value with it's key
     *
     * @param      {String - Array}   key     The key to grab or Array of keys
     * @return     {String - Object}  { sets of key\val for each key }
     */
    this.get = function(key){
        if (typeof key == 'string') {
            return window.localStorage.getItem(key);
        } else {
            var res = {};
            for (var i = 0; i < key.length; i++) {
                if (window.localStorage.getItem(key[i])) {
                    res[key[i]] = window.localStorage.getItem(key[i]);
                }
            }
            return res;
        };
    };

    /**
     * store one or more key\value
     *
     * @param      {String - Object}  key     The key of the key\val to store OR object of key\val to store all of them
     * @param      {String - null}    value   The value of the key\val to store OR null if key is Object
     */
    this.set = function(key, value){
        if( typeof key == 'string' ){
            window.localStorage.setItem(key, value);
        } else {
            // key = { 'one': 1 }
            // k = one
            // key[k] = 1
            for (k in key) {
                window.localStorage.setItem(k, key[k]);
            }
        }
    };

    /**
     * delete one or more keys
     *
     * @param      {String - Array}  key     The key to delete or Array of keys 
     */
    this.remove = function(key){
        // window.localStorage.removeItem(key);
        if (typeof key == 'string') {
            window.localStorage.removeItem(key);
        } else {
            for (var i = 0; i < key.length; i++) {
                window.localStorage.removeItem(key[i]);
            }
        };

    };
}]);
