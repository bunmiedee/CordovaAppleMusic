/*global cordova, module*/

module.exports = {
    isActive: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "isActive");
    }
};