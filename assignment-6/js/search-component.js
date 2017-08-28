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
        searchResult.then(function (result) {
            pagination.setTotalVideos(result.items);
            uicomponents.displaySearchResults();
        });
    }
    SearchComponent.prototype.pageHandler = function () {
        window.addEventListener('resize', (evt) => {
            var numberOfVideos = pagination.getTotalVideos(),
                currentNumberOfCardsInPage = document.querySelectorAll('.main-div').length;
            if (currentNumberOfCardsInPage === 0) {
                return;
            }
            if (numberOfVideos > currentNumberOfCardsInPage) {
                uicomponents.displaySearchResults(this.getTotalVideos());
            } else {
                if (numberOfVideos < currentNumberOfCardsInPage) {
                    var searchResults = document.getElementById('search-results');
                    searchResults.removeChild(searchResults.lastChild);
                    pagination.renderPaginationControls();
                }
            }
        });
    }
    return SearchComponent;
})();