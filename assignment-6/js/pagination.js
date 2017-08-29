var Pagination = (function () {
    function Pagination() { };
    Pagination.prototype.calculateNumberOfPages = function() {
        var numberOfCardsInCurrentPage = this.getNumberOfVideosToRender();
        var totalCards = this.getTotalVideos().length;
        var additionalPagesToAdd = totalCards % numberOfCardsInCurrentPage === 0 ? 0 : 1;
        var numberOfpages = Math.floor(totalCards / numberOfCardsInCurrentPage) + additionalPagesToAdd;
        return numberOfpages;
    }
    Pagination.prototype.renderPaginationControls = function () {
        var numberOfpages = this.calculateNumberOfPages();
        this.renderPageNumbers(numberOfpages);
    }

    Pagination.prototype.renderPageNumbers = function (numberOfpages) {
        this.clearPaginationControls();
        var paginationEl = document.createElement('div');
        paginationEl.setAttribute('id', 'pagination');
        var paginationControlsEl = document.createElement('div');
        paginationControlsEl.classList.add('pagination-controls')
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < numberOfpages; i++) {
            var aTag = document.createElement('a');
            aTag.appendChild(document.createTextNode(i + 1));
            aTag.setAttribute('id', 'page' + (i + 1));
            aTag.setAttribute('href', '#');
            fragment.appendChild(aTag);
        }
        paginationControlsEl.appendChild(fragment);
        paginationEl.appendChild(paginationControlsEl);
        document.body.appendChild(paginationEl);
        this.markCurrentPageActive();
    }

    Pagination.prototype.clearPaginationControls = function () {
        var paginationEl = document.querySelector('#pagination');
        if (paginationEl) {
            paginationEl.parentElement.removeChild(paginationEl);
        }
    }

    Pagination.prototype.setTotalVideos = function (totalVideos) {
        this.totalVideos = (this.totalVideos || []).concat(totalVideos);
    }

    Pagination.prototype.getTotalVideos = function () {
        return this.totalVideos;
    }

    Pagination.prototype.resetTotalVideos = function () {
        this.totalVideos = [];
        this.currentPage = null;
    }

    Pagination.prototype.setCurrentPage = function (pageNumber) {
        this.pageNumber = parseInt(pageNumber);
    }

    Pagination.prototype.getCurrentPage = function () {
        return this.pageNumber || 1;
    }

    Pagination.prototype.getStartIndexForPage = function () {
        var numberOfVideos = this.getNumberOfVideosToRender();
        var currentPage = this.getCurrentPage();
        return (currentPage * numberOfVideos) - numberOfVideos;
    }

    Pagination.prototype.getNumberOfVideosToRender = function () {
        var windowWidth = window.innerWidth;
        var numberOfVideos = 1;
        var eachCardWidth = 380;
        while (numberOfVideos * eachCardWidth < windowWidth) {
            numberOfVideos++;
        }
        return numberOfVideos > 1 ? numberOfVideos - 1 : 1;
    }

    Pagination.prototype.getStartIndexForPage = function () {
        var numberOfVideos = this.getNumberOfVideosToRender();
        var currentPage = this.getCurrentPage();
        return (currentPage * numberOfVideos) - numberOfVideos
    }

    Pagination.prototype.markCurrentPageActive = function() {
        var paginationEl = document.querySelector('#pagination').firstElementChild;
        var currentPage = this.getCurrentPage();
        var aTag = paginationEl.querySelector('#page' + currentPage);

        if (!aTag) {
            currentPage = 1;
            this.setCurrentPage(currentPage);
            aTag = paginationEl.querySelector('#page' + currentPage);
        }

        var previousActivePage = paginationEl.querySelector('.active');
        if (previousActivePage) {
            previousActivePage.classList.remove('active');
        }

        aTag.classList.add('active');
    }

    return Pagination;
})();