function createSearchInput() {
    var searchDiv, searchInputTxt, searchButton, value;
    searchDiv = document.createElement("div");
    searchDiv.classList.add("search-div");
    searchInputTxt = document.createElement("input");
    searchInputTxt.setAttribute("type", "text");
    searchInputTxt.setAttribute("id", "searchInputTxt");
    searchButton = document.createElement("input");
    searchButton.setAttribute("type", "button");
    searchButton.setAttribute("value", "Search")
    searchButton.setAttribute("id", "searchButton");
    searchButton.addEventListener("click", buttonClicked);
    function buttonClicked(event) {
        displayResultData()
    }
    searchDiv.appendChild(searchInputTxt);
    searchDiv.appendChild(searchButton);
    document.body.appendChild(searchDiv);
}
// function searchVideos() {
//     var searchInputText = document.querySelector("#searchInputTxt");
//     var searchInputTextValue = searchInputText.value;
//     var searchUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q="+ searchInputTextValue;
//     callYoutubeApi(searchUrl).then((response) => {
//             console.log(response.items);
//             return response.items;
//         });
// }
// function callYoutubeApi(searchUrl){
//      return new Promise((resolve, reject) => {
//         fetch(searchUrl)
//             .then(function (res) {
//                 resolve(res.json());
//             }, function (err) {
//                 reject(err);
//             });
//     });
// }
function displayResultData() {
    var searchInputText = document.querySelector("#searchInputTxt");
    var searchInputTextValue = searchInputText.value;
    var searchUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q=" + searchInputTextValue;
    var videosDiv = document.createElement("div");
    videosDiv.classList.add("videos-div");
    var videoDescription = document.createElement("p");
    var promise = new Promise((resolve, reject) => {
        fetch(searchUrl)
            .then(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
    });
    var value = promise.then((response) => {
        return response.items;
    });
    value.then(function(result) {
        videoDescription.textContent = result.map(function(a){a.id});        
    })
    videosDiv.appendChild(videoDescription);
    document.body.appendChild(videosDiv);
}
createSearchInput()