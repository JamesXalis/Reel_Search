let $main = document.querySelector("main");
let $searchButton = document.querySelector("#searchMovieBTN");
let $randomButton = document.querySelector("#searchRandomBTN");
let $wishlistButton = document.querySelector("#wishlistBTN");
let $movieInput = document.querySelector("#password");
let movieData = [];
let randomMovies = ["The Matrix", "Spider-Man", "The Amazing Spider-Man", "Interstellar", "The Martian", "The Disaster Artist", "Despicable Me", "Casablanca", "Argo", "Crash", "Capote", "Mission: Impossible-Rogue Nation", "Mission: Impossible II", "Sonic the Hedgehog", "Kingsman: The Secret Service", "Iron Man", "The Avengers", "Star Wars: Episode V-The Empire Strikes Back", "Blade Runner", "Dances With Wolves", "A Clockwork Orange", "Sharknado", "The Birds", "The Silence of the Lambs", "Misery", "Psycho", "The Shining", "The Lord of the Rings: The Fellowship of the Ring", "The Transporter", "Die Hard", "Galaxy Quest", "Toy Story", "Ocean's Eleven", "Goldfinger", "Get Smart", "Casino Royale", "Knives Out", "Flubber", "Hook", "Jumanji", "Mrs. Doubtfire", "El Dorado", "Shrek", "Tarzan", "The Mummy", "Spaceballs", "Robin Hood: Men in Tights", "The Evil Dead", "Get Out", "Nightmare on Elm Street", "Halloween", "Hocus Pocus", "The Greatest Showman", "High School Musical", "Twilight", "Harry Potter and the Sorcerer's Stone", "Harry Potter and the Goblet of Fire", "The Hunger Games", "Silver Linings Playbook", "Full Metal Jacket", "The Room", "Mortal Kombat", "Scary Movie", "Speed", "Point Break", "Doctor Sleep", "Batman Begins", "The Dark Knight", "Batman Returns", "She's All That", "Not Another Teen Movie", "Godzilla", "Rocky"];
let inTheaters = ["Nope", "Bullet Train", "Pearl", "See How They Run", "The Invitation", "Selena"];
let newReleases = ["Thor: Love and Thunder", "Black Phone", "Sound of Metal", "Bullet Proof", "Lost Illusions", "Wrong Place"];
let oscarWinners = ["CODA", "Nomadland", "Parasite", "Green Book", "The Shape of Water", "Moonlight", "Spotlight", "Birdman", "12 Years a Slave", "Argo", "The Artist", "The Kings Speech", "Slumdog Millionaire", "The Hurt Locker", "No Country for Old Men", "The Departed", "Million Dollar Baby", "Crash", "The Lord of the Rings: The Return of the King", "Chicago", "A Beautiful Mind", "Gladiator"
];

function getMovieData(movie) {
    let requestUrl = `https://www.omdbapi.com/?apikey=b4b72294&t=${movie}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.Error) {
                document.getElementById("modalTriggerButton").click();
                return;
            }
            posterURL = data.Poster;
            console.log(posterURL);
            movieData = [data.Title, data.Released, data.Genre, data.Actors, data.Awards, data.Plot, data.Rated]
            document.querySelector('#mainEmbed').style.display = `block`;
            document.getElementById('movieInfo').style.display = `flex`;
            document.getElementById('searchedPoster').setAttribute("src", posterURL);
            document.getElementById('searchedTitle').textContent = `${movieData[0]}`;
            document.getElementById('searchedRelease').textContent = `Release Date: ${movieData[1]}`;
            document.getElementById('searchedActors').textContent = `Actors: ${movieData[3]}`;
            document.getElementById('searchedGenre').textContent = `Genre: ${movieData[2]}`;
            document.getElementById('searchedAwards').textContent = `Awards: ${movieData[4]}`;
            document.getElementById('searchedPlot').textContent = `Plot: ${movieData[5]}`;
            document.getElementById('searchedRated').textContent = `Rated: ${movieData[6]}`;
            // youTubeSearch(data.Title, data.Released);
        });
}

function youTubeSearch(video, date){
    //requestUrl currently is running a search under 'matrix' that needs to be refrenced to what the user searches for ${searchTerm()}
    console.log(video)
    let requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${video}_${date}_trailer&key=AIzaSyDZFKj9BobzhlYLwGozMZCE8qgQgrIcWc0`;

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

function change (){
    if (document.getElementById("ytplayer").src=="https://www.youtube.com/embed/?listType=user_uploads&list=movietrailers") {
        document.getElementById("ytplayer").src ="https://www.youtube.com/embed/?listType=user_uploads&list=movietrailers&index=3"
    }
    else {
        document.getElementById("ytplayer").src= "https://www.youtube.com/embed/?listType=user_uploads&list=movietrailers"
    }
}

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
    document.getElementById('AddedMSG').setAttribute("style", "display:none");
});

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        $searchButton.click();
    }
});

$randomButton.addEventListener('click', function(){
    let randMOV = randomMovies[Math.floor(Math.random()*randomMovies.length)]
    document.getElementById('AddedMSG').setAttribute("style", "display:none");
    getMovieData(randMOV);
});

$wishlistButton.addEventListener('click', function(){
    let WatchList = JSON.parse(localStorage.getItem('localWatchList')) || [];
    let WatchListPosterURL = JSON.parse(localStorage.getItem('localWatchListPosterURL')) || [];
    document.getElementById('AddedMSG').setAttribute("style", "display:block");
    if (WatchList.includes(document.getElementById('searchedTitle').textContent)) {
        console.log(WatchList);
        return;
    }
    WatchList.unshift(document.getElementById('searchedTitle').textContent);
    WatchListPosterURL.unshift(document.getElementById('searchedPoster').getAttribute('src'));
    console.log(WatchList);
    console.log(WatchListPosterURL);
    localStorage.setItem('localWatchList', JSON.stringify(WatchList));
    localStorage.setItem('localWatchListPosterURL', JSON.stringify(WatchListPosterURL));
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

document.getElementById("ytplayer").setAttribute("src", "https://www.youtube.com/embed/?listType=user_uploads&list=movietrailers");