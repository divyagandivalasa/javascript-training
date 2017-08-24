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
    }
    SearchComponent.prototype.getSearchResults = function () {
        var searchText = document.querySelector("#searchtextbox");
        var searchResult = apihandler.callYoutubeApi(searchText.value);
        searchResult.then(function (result) {
            this.setTotalVideos(result.items);
            uicomponents.displaySearchResults(this.getTotalVideos());
        });
    }
    this.setTotalVideos = function (videosList) {
        this.totalVideos = videosList;
    }
    this.getTotalVideos = function () {
        return this.totalVideos;
    }
    return SearchComponent;
})();