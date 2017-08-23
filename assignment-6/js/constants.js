var CONSTANTS = (function () {
    var private = {
        'YOUTUBE_API_SEARCH_URL': 'https://www.googleapis.com/youtube/v3/search',
        'API_KEY': 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y',
        'TYPE': 'video',
        'PART': 'snippet',
        'MAX_RESULTS': '15',
        'YOUTUBE_WATCH_LINK': 'https://www.youtube.com/watch?v=',
        'YOUTUBE_VIDEOS_LINK':'https://www.googleapis.com/youtube/v3/videos'
    };
    return {
        get: function (name) { return private[name]; }
    };
    return CONSTANTS;
})();