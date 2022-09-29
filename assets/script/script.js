let $main = document.querySelector("main");
let $searchButton = document.querySelector("#searchMovieBTN");
let $movieInput = document.querySelector("#password");
let movieData = [];

function getMovieData(movie) {
    let requestUrl = `http://www.omdbapi.com/?apikey=b4b72294&t=${movie}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            posterURL = data.Poster;
            movieData = [data.Title, data.Released, data.Genre, data.Actors, data.Awards, data.Plot, data.Rated]
            document.querySelector('iframe').style.display = `block`;
            document.getElementById('movieInfo').style.display = `flex`;
            document.getElementById('searchedPoster').setAttribute("src", posterURL);
            document.getElementById('searchedTitle').textContent = `${movieData[0]}`;
            document.getElementById('searchedRelease').textContent = `Release Date: ${movieData[1]}`;
            document.getElementById('searchedActors').textContent = `Actors: ${movieData[3]}`;
            document.getElementById('searchedGenre').textContent = `Genre: ${movieData[2]}`;
            document.getElementById('searchedAwards').textContent = `Awards: ${movieData[4]}`;
            document.getElementById('searchedPlot').textContent = `Plot: ${movieData[5]}`;
            document.getElementById('searchedRated').textContent = `Rated: ${movieData[6]}`;
            youTubeSearch(data.Title);
        });
}

$searchButton.addEventListener("click", function() {
    getMovieData($movieInput.value);
    $movieInput.value = '';
})

function youTubeSearch(video){
    //requestUrl currently is running a search under 'matrix' that needs to be refrenced to what the user searches for ${searchTerm()}
    console.log(video)
    let requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${video}_trailer&key=AIzaSyDZFKj9BobzhlYLwGozMZCE8qgQgrIcWc0`;

    fetch(requestUrl)
        .then (function(response) {
            return response.json();
        })
        .then (function(data) {
            console.log(data)
            console.log(`${data.items[0].id.videoId}`) //this is the video id for the given youtube video
            document.querySelector(".youtubeVideo").src =`https://www.youtube.com/embed/${data.items[0].id.videoId}` 
            //this grabs the youtubeVideo iFrame and links the 
            //.src video into the html file.
        })

}




document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});
