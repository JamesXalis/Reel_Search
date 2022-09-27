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
$main.append($input);
$main.append($button);
$main.append($uL);


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