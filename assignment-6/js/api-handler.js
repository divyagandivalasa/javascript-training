var ApiHandler = (function () {
    function ApiHandler() { };
    ApiHandler.prototype.callYoutubeApi = function (searchText) {
        var params = {
            key: CONSTANTS.get('API_KEY'),
            type: CONSTANTS.get('TYPE'),
            part: CONSTANTS.get('PART'),
            maxResults: CONSTANTS.get('MAX_RESULTS'),
            q: searchText
        };
        var url = CONSTANTS.get("YOUTUBE_API_SEARCH_URL") + "?" + this.buildUrlparams(params);
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(function (response) {
                    resolve(response.json());
                }, function (error) {
                    reject(error);
                });
        });
    }
    ApiHandler.prototype.buildUrlparams = function (params) {
        var url = "";
        for (var value in params) {
            if (url.length > 0) {
                url += "&";
            }
            url += encodeURI(value + "=" + params[value]);
        }
        return url;
    }
    ApiHandler.prototype.viewsCountCall = function (videoId) {
        var params = {
            key: CONSTANTS.get('API_KEY'),
            part: CONSTANTS.get('PART')+',statistics',
            id : videoId
        };
        var url = CONSTANTS.get("YOUTUBE_VIDEOS_LINK") + "?" + this.buildUrlparams(params);
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(function (response) {
                    resolve(response.json());
                }, function (error) {
                    reject(error);
                });
        });
    }
    return ApiHandler;
})();