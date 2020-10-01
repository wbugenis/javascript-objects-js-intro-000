var playlist = { 'Mr Zim': 'Plamp' };

function updatePlayList(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  playlist.remove(artistName);
  return playlist;
}