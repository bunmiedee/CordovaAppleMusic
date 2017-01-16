/*global cordova, module*/
window.appleMusicPluginPlaying = (function(){})
window.appleMusicPluginSeeked = (function(){})
window.appleMusicPluginStopped = (function(){})
window.appleMusicPluginTrackChanged = (function(){})
window.appleMusicPluginTimeUpdate = (function(){})
module.exports = {
    getCountryCode: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "getCountryCode", []);
    },
    getDuration: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "getDuration", []);
    },
    getPosition: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "getPosition", []);
    },
    getStatus: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "getStatus", []);
    },
    init: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "init", []);
    },
    onPlay: function(f) {
        window.appleMusicPluginPlaying = f
    },
    onSeek: function(f) {
        window.appleMusicPluginSeeked = f
    },
    onStop: function(f) {
        window.appleMusicPluginStopped = f
    },
    //use track index
    onTrackChanged: function(f) {
        window.appleMusicPluginTrackChanged = f
    },
    onTimeUpdate: function(f) {
        window.appleMusicPluginTimeUpdate = f
    },
    pause: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "pause", []);
    },
    addTrackToLib: function (trackId, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "addTrackToLib", [trackId]);
    },
    playTrack: function (trackId, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "playTrack", [trackId]);
    },
    requestAuthorization: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "requestAuthorization", []);
    },
    resume: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "resume", []);
    },
    seek: function (seconds, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "seek", [seconds]);
    },
    stop: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "stop", []);
    }
    skip: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "skip", []);
    },
    prev: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "AppleMusic", "prev", []);
    }
};
