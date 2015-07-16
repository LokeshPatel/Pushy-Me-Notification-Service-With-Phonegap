cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com-lokesh-pushyme-plugin/pushyme.js",
        "id": "com-lokesh-pushyme-plugin",
        "clobbers": [
            "window.pushyMeTokenID"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com-lokesh-pushyme-plugin": "1.0.0",
}
// BOTTOM OF METADATA
});

