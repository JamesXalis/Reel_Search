function index2init() {
    let WatchList = JSON.parse(localStorage.getItem('localWatchList')) || [];
    for (i=0; i<WatchList.length; i++) {
        let newMovie = document.createElement('li');
        newMovie.textContent = WatchList[i];
        document.getElementById('currentWatchlist').append(newMovie);
    }
};

index2init();