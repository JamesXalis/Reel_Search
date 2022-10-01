numberArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"];

function index2init() {
    let WatchList = JSON.parse(localStorage.getItem('localWatchList')) || [];
    let WatchListPosterURL = JSON.parse(localStorage.getItem('localWatchListPosterURL')) || [];
    for (i=0; i<WatchList.length; i++) {
        let newMovie = document.createElement('a');
        newMovie.setAttribute("class", "collection-item");
        newMovie.setAttribute("href", "#!")
        newMovie.textContent = WatchList[i];
        document.getElementById('currentWatchlist').append(newMovie);
        let newMoviePosterCont = document.createElement("a");
        newMoviePosterCont.setAttribute("class", "carousel-item");
        newMoviePosterCont.setAttribute("href", `#${numberArray[i]}!`);
        let newMoviePoster = document.createElement("img");
        newMoviePoster.setAttribute("src", WatchListPosterURL[i]);
        newMoviePosterCont.append(newMoviePoster);
        document.getElementById("watchlistPosterCarousel").append(newMoviePosterCont);
    }
};
index2init();
