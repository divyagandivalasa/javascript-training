var UiComponents = (function () {
    function UiComponents() { };
    UiComponents.prototype.displaySearchResults = function () {
        var videosDiv = document.createElement("div");
        videosDiv.classList.add("search-results");
        var videos = pagination.getTotalVideos();
        var noOfVideos = pagination.getNumberOfVideosToRender();
        var startIndex = pagination.getStartIndexForPage();
        var fragment = document.createDocumentFragment();
        this.clearSearchResults();
        videosDiv.setAttribute("id", "search-results");
        videosDiv.classList.add("search-results");
        for (var i = startIndex; i < (startIndex + noOfVideos); i++) {
             if (videos[i]) {
                fragment.appendChild(this.displayVideo(videos[i], i));
            } else {
                // get next page of records
            }            
        }
        videosDiv.appendChild(fragment);
        document.body.appendChild(videosDiv);
        pagination.renderPaginationControls(videos);

        this.attachPageChangeListener();
    }
    UiComponents.prototype.displayVideo = function (video, index) {
        var template = document.querySelector(".youtube-tpl");
        var templateContent = document.importNode(template.content, true);
        templateContent.querySelector('.main-div').setAttribute('id', 'video_' + index);
        var mainDiv = templateContent.querySelector(".main-div");
        var img = templateContent.querySelector("img");
        img.setAttribute("src", video.snippet.thumbnails.medium.url);
        var title = templateContent.querySelector(".title");
        var titleLink = document.createElement("a");
        titleLink.setAttribute("href", CONSTANTS.get('YOUTUBE_API_SEARCH_URL') + video.id.videoId);
        titleLink.appendChild(document.createTextNode(video.snippet.title));
        title.appendChild(titleLink);
        var channelTitle = templateContent.querySelector(".channel-title");
        channelTitle.appendChild(document.createTextNode("Channel Title: "));
        channelTitle.appendChild(document.createTextNode(video.snippet.channelTitle));
        var publishedDate = templateContent.querySelector(".published-date");
        publishedDate.appendChild(document.createTextNode("Published Date: "));
        publishedDate.appendChild(document.createTextNode(video.snippet.publishedAt));
        var description = templateContent.querySelector(".description");
        description.appendChild(document.createTextNode("Description: "));
        description.appendChild(document.createTextNode(video.snippet.description));
        var noofValues = templateContent.querySelector(".noofviews");
        this.getViewCount(video.id.videoId).then(function (response) {
            noofValues.appendChild(document.createTextNode("No of Views: "));
            noofValues.appendChild(document.createTextNode(response));
        });
        return templateContent;
    }
    UiComponents.prototype.getViewCount = function (videoId) {
        return apihandler.viewsCountCall(videoId).then(function (response) {
            return response.items[0].statistics.viewCount;
        });
    }

    UiComponents.prototype.clearSearchResults = function () {
        let allcardsEl = document.querySelector('#search-results');
        if (allcardsEl) {
            allcardsEl.parentElement.removeChild(allcardsEl);
        }
    }
    UiComponents.prototype.attachPageChangeListener = function () {
        let paginationControlsEl = document.querySelector('#pagination').firstElementChild;
        paginationControlsEl.addEventListener('click', (evt) => {
            if (evt.target.tagName === 'A') {
                pagination.setCurrentPage(evt.target.text);
                this.displaySearchResults();
                pagination.markCurrentPageActive();
            }
        });
    }

    return UiComponents;
})();