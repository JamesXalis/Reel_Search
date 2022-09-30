let $main = document.querySelector("main");
let $searchButton = document.querySelector("#searchMovieBTN");
let $randomButton = document.querySelector("#searchRandomBTN")
let $movieInput = document.querySelector("#password");
let movieData = [];
let randomMovies = ["The Matrix", "Spider-Man", "The Amazing Spider-Man", "Interstellar", "The Martian", "The Disaster Artist", "Despicable Me", "Casablanca", "Argo", "Crash", "Capote", "Mission: Impossible-Rogue Nation", "Mission: Impossible II", "Sonic the Hedgehog", "Kingsman: The Secret Service", "Iron Man", "The Avengers", "Star Wars: Episode V-The Empire Strikes Back", "Blade Runner", "Dances With Wolves", "A Clockwork Orange", "Sharknado", "The Birds", "The Silence of the Lambs", "Misery", "Psycho", "The Shining", "The Lord of the Rings: The Fellowship of the Ring", "The Transporter", "Die Hard", "Galaxy Quest", "Toy Story", "Ocean's Eleven", "Goldfinger", "Get Smart", "Casino Royale", "Knives Out", "Flubber", "Hook", "Jumanji", "Mrs. Doubtfire", "El Dorado", "Shrek", "Tarzan", "The Mummy", "Spaceballs", "Robin Hood: Men in Tights", "The Evil Dead", "Get Out", "Nightmare on Elm Street", "Halloween", "Hocus Pocus", "The Greatest Showman", "High School Musical", "Twilight", "Harry Potter and the Sorcerer's Stone", "Harry Potter and the Goblet of Fire", "The Hunger Games", "Silver Linings Playbook", "Full Metal Jacket", "The Room", "Mortal Kombat", "Scary Movie", "Speed", "Point Break", "Doctor Sleep", "Batman Begins", "The Dark Knight", "Batman Returns", "She's All That", "Not Another Teen Movie", "Godzilla", "Rocky"];
let inTheaters = ["Nope", "Bullet Train", "Pearl", "See How They Run", "The Invitation", "Selena"];
let newReleases = ["Thor: Love and Thunder", "Black Phone", "Sound of Metal", "Bullet Proof", "Lost Illusions", "Wrong Place"];

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
            // youTubeSearch(data.Title);
        });
}


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
    
};

//add type to make sure the video only shows video
//channelId can be used to get most recent videos from youtube trailers
//safe search modorate/strict
//videoDuration set to short
//videoEmbeddable set that to true

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});


$searchButton.addEventListener("click", function() {
    if (!$movieInput.value.trim()) {
        $movieInput.value = '';
        return;
    }
    getMovieData($movieInput.value.trim());
    $movieInput.value = '';
});

$randomButton.addEventListener('click', function(){
    let randMOV = randomMovies[Math.floor(Math.random()*randomMovies.length)]
    console.log(randMOV);
    getMovieData(randMOV);
});