var UiComponents = (function(){
    function UiComponents(){};
  
    UiComponents.prototype.displaySearchResults = function(){
        var videosList = search.getTotalVideos();
        var videosDiv = document.createElement("div");
        var fragment = document.createDocumentFragment();
        for (var i=0; i< videosList.length; i++){
            fragment.appendChild(displayVideo(videosList[i]));
        }
        videosDiv.appendChild(fragement);
        document.body.appendChild(videosDiv);
    }
    UiComponents.prototype.displayVideo = function(video){
        var template = document.querySelector(".youtube-tpl");
        var templateContent = document.importNode(template.content, true);
        var mainDiv = templateContent.querySelector(".main-div");
        var img = templateContent.querySelector("img");
        img.setAttribute("src", video.snippet.thumbnails.medium.url);
        var title = templateContent.querySelector(".title");
        var titleLink = document.createElement("a");
        a.setAttribute("href", CONSTANTS.get('YOUTUBE_API_SEARCH_URL')+video.id.videoId);
        titleLink.appendChild(document.createTextNode(video.snippet.title));
        title.appendChild(titleLink);
        var channelTitle = templateContent.querySelector(".channel-title");
        channelTitle.setAttribute(document.createTextNode(video.snippet.channelTitle));
        var publishedDate = templateContent.querySelector(".published-date");
        publishedDate.setAttribute(document.createTextNode(video.snippet.publishedAt));
        var description = templateContent.querySelector(".description");
        description.setAttribute(document.createTextNode(video.snippet.description));
        return templateContent;
    }
    return UiComponents;
})();