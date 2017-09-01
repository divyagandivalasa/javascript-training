var Pagination = (function () {
    function Pagination() { };
    Pagination.prototype.calculateNumberOfPages = function() {
        var numberOfVideosInCurrentPage = this.getNumberOfVideosToRender();
        var totalVideos = this.getTotalVideos().length;
        var additionalPagesToAdd = totalVideos % numberOfVideosInCurrentPage === 0 ? 0 : 1;
        var numberOfpages = Math.floor(totalVideos / numberOfVideosInCurrentPage) + additionalPagesToAdd;
        return numberOfpages;
    }
    Pagination.prototype.renderPaginationControls = function () {
        var numberOfpages = this.calculateNumberOfPages();
        this.renderPageNumbers(numberOfpages);
    }

    Pagination.prototype.renderPageNumbers = function (numberOfpages) {
        this.clearPaginationControls();
        var pagination = document.createElement('div');
        pagination.setAttribute('id', 'pagination');
        var paginationControls = document.createElement('div');
        paginationControls.classList.add('pagination-controls')
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < numberOfpages; i++) {
            var aTag = document.createElement('a');
            aTag.appendChild(document.createTextNode(i + 1));
            aTag.setAttribute('id', 'page' + (i + 1));
            aTag.setAttribute('href', '#');
            fragment.appendChild(aTag);
        }
        paginationControls.appendChild(fragment);
        pagination.appendChild(paginationControls);
        document.body.appendChild(pagination);
        this.markCurrentPageActive();
    }

    Pagination.prototype.clearPaginationControls = function () {
        var pagination = document.querySelector('#pagination');
        if (pagination) {
            pagination.parentElement.removeChild(pagination);
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