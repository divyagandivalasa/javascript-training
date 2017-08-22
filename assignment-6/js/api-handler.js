var ApiHandler = (function () {
    function ApiHandler() { };
    ApiHandler.prototype.callYoutubeApi = function (searchText) {
        var params = {
            key: CONSTANTS.get('API_KEY'),
            type: CONSTANTS.get('TYPE'),
            part: CONSTANTS.get('PART'),
            maxresults: CONSTANTS.get('MAX_RESULTS'),
            q: searchText
        };
        var url = CONSTANTS.get("YOUTUBE_API_SEARCH_URL") + "?" + this.buildUrlparams(params)
        return  new Promise(function (resolve, reject) {
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
    return ApiHandler;
})();