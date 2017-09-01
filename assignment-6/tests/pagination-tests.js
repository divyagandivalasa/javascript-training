describe("pagination tests", function(){
    var pagination;
    beforeAll(function(){
        pagination = new Pagination();
    });
    it("should calculate no of pages", function(){
        pagination.setTotalVideos(15);
        var result = pagination.calculateNumberOfPages();
        expect(result).toBe(1);
    });
    it("should get number of videos to render", function(){
        var result = pagination.getNumberOfVideosToRender();
        expect(result).toBe(2);
    });
     it("should get the start index of the page", function(){
        var result = pagination.getStartIndexForPage();
        expect(result).toBe(0);
    });
});