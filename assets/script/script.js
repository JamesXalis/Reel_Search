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