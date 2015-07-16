cordova.define("com-lokesh-pushyme-plugin", function(require, exports, module) { 
var exec = require('cordova/exec');

var pushyMeTokenID = function(callbacksucess,callbackfail) {
    exec(callbacksucess,callbackfail,"CDVPlushyMePlugin", "pushyMeTokenID", []);
};

module.exports = pushyMeTokenID;

});

