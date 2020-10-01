var playlist = { 'Mr Zim': 'Plamp' };

function updatePlayList(playlist, artistName, songTitle) {
  return (playlist[artistName] = songTitle);
}

function removeFromPlaylist(playlist, artistName) {
  return playlist.remove(artistName);
}