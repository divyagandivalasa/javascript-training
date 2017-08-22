var SearchComponent = (function () {
    function SearchComponent() { };
    SearchComponent.prototype.createSearchComponent = function () {
        var searchDiv = document.createElement("div");
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
        var result = apihandler.callYoutubeApi(searchText.value);
       
    }
    SearchComponent.prototype.setTotalVideos = function (videosList) {
        this.totalVideos = videosList;
    }
    SearchComponent.prototype.getTotalVideos = function () {
        return totalVideos;
    }
    return SearchComponent;
})();