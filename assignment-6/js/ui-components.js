var UiComponents = (function () {
    function UiComponents() { };
    UiComponents.prototype.displaySearchResults = function (videosList) {
        var videosDiv = document.createElement("div");
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < videosList.length; i++) {
            fragment.appendChild(this.displayVideo(videosList[i]));
        }
        videosDiv.appendChild(fragment);
        document.body.appendChild(videosDiv);
    }
    UiComponents.prototype.displayVideo = function (video) {
        var template = document.querySelector(".youtube-tpl");
        var templateContent = document.importNode(template.content, true);
        var mainDiv = templateContent.querySelector(".main-div");
        var img = templateContent.querySelector("img");
        img.setAttribute("src", video.snippet.thumbnails.medium.url);
        var title = templateContent.querySelector(".title");
        var titleLink = document.createElement("a");
        titleLink.setAttribute("href", CONSTANTS.get('YOUTUBE_API_SEARCH_URL') + video.id.videoId);
        titleLink.appendChild(document.createTextNode(video.snippet.title));
        title.appendChild(titleLink);
        var channelTitle = templateContent.querySelector(".channel-title");
        channelTitle.appendChild(document.createTextNode(video.snippet.channelTitle));
        var publishedDate = templateContent.querySelector(".published-date");
        publishedDate.appendChild(document.createTextNode(video.snippet.publishedAt));
        var description = templateContent.querySelector(".description");
        description.appendChild(document.createTextNode(video.snippet.description));
        var viewCount = this.getViewCount(video.id.videoId);
        var noofViews = templateContent.querySelector(".noofviews");
        noofViews.appendChild(document.createTextNode(viewCount));
        return templateContent;
    }
    UiComponents.prototype.getViewCount = function (videoId) {
        var value = apihandler.getViewCount(videoId);
        return value;
    }
    return UiComponents;
})();