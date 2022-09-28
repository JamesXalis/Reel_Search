console.log ('this is loaded')

let $main = document.querySelector("main");
let movieData = [];
let title = '';
let released = '';
let genre = '';
let actors = '';
let awards = '';
let plot = '';
let poster = '';
let rated = '';
let $input = document.createElement("input");
$input.setAttribute("type", "text");
$input.setAttribute("placeholder", "Enter Movie Here");
let $button = document.createElement("button")
$button.textContent = "Search";
let $uL = document.createElement("ul");
// $main.append($input);
// $main.append($button);
// $main.append($uL);


function getMovieData(movie) {
    let requestUrl = `http://www.omdbapi.com/?apikey=b4b72294&t=${movie}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            title = data.Title;
            released = data.Released;
            genre = data.Genre;
            actors = data.Actors;
            awards = data.Awards;
            plot = data.Plot;
            poster = data.Poster;
            rated = data.Rated;
            movieData = [title, released, genre, actors, awards, plot, poster, rated]
            console.log(movieData);
            document.createElement("lI");
            for (i=0; i<movieData.length; i++) {
                let $listItem = document.createElement("li");
                $listItem.textContent = movieData[i]
                $uL.append($listItem);
            }
        });
}



$button.addEventListener("click", function() {
    $uL.innerHTML = "";
    getMovieData($input.value);
    $input.value = '';
})

function youTubeSearch(video){
    //requestUrl currently is running a search under 'matrix' that needs to be refrenced to what the user searches for ${searchTerm()}
    let requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=matrix_trailer&key=AIzaSyDZFKj9BobzhlYLwGozMZCE8qgQgrIcWc0`;
    
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
youTubeSearch();

//add type to make sure the video only shows video
//channelId can be used to get most recent videos from youtube trailers
//safe search modorate/strict
//videoDuration set to short
//videoEmbeddable set that to true

console.log ('this is loaded')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });


