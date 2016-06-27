//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  document.getElementById('song-list').innerHTML = '';
  for (var i = 0; i < 50; i++) {
    document.getElementById('song-list').innerHTML += '<li> Title: ' + songList[i].title + '<br>';
    document.getElementById('song-list').innerHTML += '<img src="' + songList[i].albumArt + '" alt="" /><br>';
    document.getElementById('song-list').innerHTML += 'Artist: ' + songList[i].artist + '<br>';
    document.getElementById('song-list').innerHTML += 'Collection: ' + songList[i].collection + '<br>';
    document.getElementById('song-list').innerHTML += 'Price: ' + songList[i].price + '<br>';
    document.getElementById('song-list').innerHTML += '<audio controls preload="none" style="width:480px;"><source src="' + songList[i].preview + '" type="audio/mp4" /></audio></li>'
  }
  
  
}