function index2init() {
    let WatchList = JSON.parse(localStorage.getItem('localWatchList')) || [];
    for (i=0; i<WatchList.length; i++) {
        let newMovie = document.createElement('a');
        newMovie.setAttribute("class", "collection-item")
        newMovie.textContent = WatchList[i];
        document.getElementById('currentWatchlist').append(newMovie);
    }
};

// index2init();