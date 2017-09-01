var SearchComponent = (function () {
    function SearchComponent() { };
    SearchComponent.prototype.createSearchComponent = function () {
        var searchDiv = document.createElement("div");
        searchDiv.classList.add("search-component")
        var searchTextBox = document.createElement("input");
        searchTextBox.setAttribute("id", "searchtextbox")
        searchTextBox.setAttribute("type", "text");
        var searchButton = document.createElement("input");
        searchButton.setAttribute("type", "button");
        searchButton.setAttribute("value", "search");
        searchButton.addEventListener("click", this.getSearchResults);
        searchDiv.appendChild(searchTextBox);
        searchDiv.appendChild(searchButton);
        document.body.appendChild(searchDiv);
        this.pageHandler();
    }
    SearchComponent.prototype.getSearchResults = function () {
        var searchText = document.querySelector("#searchtextbox");
        var searchResult = apihandler.callYoutubeApi(searchText.value);
        pagination.resetTotalVideos();
        searchResult.then(function (result) {
            pagination.setTotalVideos(result.items);
            uicomponents.displaySearchResults();
        });
    }
    SearchComponent.prototype.pageHandler = function () {
        window.addEventListener('resize', function(evt){
            var numberOfVideos = pagination.getNumberOfVideosToRender(),
                currentNumberOfVideosInPage = document.querySelectorAll('.main-div').length;
            if (currentNumberOfVideosInPage === 0) {
                return;
            }
            if (numberOfVideos > currentNumberOfVideosInPage) {
                uicomponents.displaySearchResults();
            } else {
                if (numberOfVideos < currentNumberOfVideosInPage) {
                    var searchResults = document.getElementById('search-results');
                    searchResults.removeChild(searchResults.lastChild);
                    pagination.renderPaginationControls();
                }
            }
        });
    }
    return SearchComponent;
})();