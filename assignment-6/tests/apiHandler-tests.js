describe('Testing the Constructor Functions', function () {
    var apiHandler;
    beforeAll(function () {
        apiHandler = new ApiHandler();
    });
    it("No of videos should be 15", function (done) {
        var searchText = "javascript";
        apiHandler.callYoutubeApi(searchText).then(function (result) {
            expect(result.items.length).toBe(15);
            done();
        });
    });
    it("should return video statistics", function (done) {
        var videoId = "Ukg_U3CnJWI";
        apiHandler.viewsCountCall(videoId).then(function (result) {
            expect(result.items[0].statistics.viewCount).toBeDefined();
            expect(result.items[0].snippet.channelTitle).toBe("Jake Wright");
            done();
        });
    });
    it("should build the parameters", function () {
        var params = {
            'key': 'abc',
            'type': 'video',
            'part': 'snippet,statistics',
            'maxResults': '15',
        }
        expect(apiHandler.buildUrlparams(params)).toBe("key=abc&type=video&part=snippet,statistics&maxResults=15");
    });
});