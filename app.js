//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  document.getElementById('song-list').innerHTML = '';
  for (var i = 0; i < songList.length; i++) {
    var songCard = document.createElement('li');
    
    songCard.className = 'jumbotron'
    songCard.innerHTML += '<img src="' + songList[i].albumArt + '" alt="..." />';
    songCard.innerHTML += '<h4>Title: ' + songList[i].title + '</h4>';
    songCard.innerHTML += '<p>Artist: ' + songList[i].artist + '</p>';
    songCard.innerHTML += '<p>Collection: ' + songList[i].collection + '</p>';
    songCard.innerHTML += '<p>Price: ' + songList[i].price + '</p>';
    songCard.innerHTML += '<audio controls preload="none" style="width:60%;"><source src="' + songList[i].preview + '" type="audio/mp4" /></audio>'
    document.getElementById('song-list').appendChild(songCard)
  }
  
  
}

//Look into how EventListners Work

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0; i < audios.length; i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);