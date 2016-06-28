//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  document.getElementById('song-list').innerHTML = '';
  document.getElementsByClassName("form")[0].style.padding = "30px";
  if (document.getElementById('artist').value == '') {
    document.getElementsByClassName("form")[0].style.padding = "300px 50px";
  }

  for (var i = 0; i < songList.length; i++) {
    var songCard = document.createElement('li');
    
    songCard.className = 'jumbotron'
    songCard.innerHTML += '<img src="' + songList[i].albumArt + '" alt="..." />';
    songCard.innerHTML += '<h4>Title: ' + songList[i].title + '</h4>';
    songCard.innerHTML += '<p>Artist: ' + songList[i].artist + '</p>';
    songCard.innerHTML += '<p>Collection: ' + songList[i].collection + '</p>';
    songCard.innerHTML += '<p>Price: ' + songList[i].price + '</p>';
    songCard.innerHTML += '<audio controls preload="none" style="width:60%;"><source src="' + songList[i].preview + '" type="audio/mp4" /></audio>';

    document.getElementById('song-list').appendChild(songCard);

  }
}


var playing;
document.addEventListener('play', function(e){

    if(playing){
      playing.pause();
    }
    playing = e.target;
    playing.play();

}, true);

    //THIS CODE WORKS BUT IS INEFFECIENT
    // var audios = document.getElementsByTagName('audio');
    // for(var i = 0; i < audios.length; i++){
    //     if(audios[i] != e.target){
    //         audios[i].pause();
    //     }
    // }

$('#form').on('submit', function(event){

  // prevent default browser behaviour
  event.preventDefault();
  event.stopPropagation();

  //do stuff with your form here
  getMusic();

});