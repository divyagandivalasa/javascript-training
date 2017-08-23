var ApiHandler = (function () {
    function ApiHandler() { };
    
    ApiHandler.prototype.setSearchText = function (input) {
        this.searchText = input;
    }
    ApiHandler.prototype.getSearchText = function () {
        return this.searchText;
    }
    ApiHandler.prototype.callYoutubeApi = function (searchText) {
        this.setSearchText(searchText);
        var params = {
            key: CONSTANTS.get('API_KEY'),
            type: CONSTANTS.get('TYPE'),
            part: CONSTANTS.get('PART'),
            maxresults: CONSTANTS.get('MAX_RESULTS'),
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
        var searchText = this.getSearchText();
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

    ApiHandler.prototype.getViewCount = function (videoId) {
        var noofVideos;
        var response = apihandler.viewsCountCall(videoId);
        response.then(function (result) {
            noofVideos = result.items[0].statistics.viewCount;
        });
        return noofVideos;
    }
    return ApiHandler;
})();