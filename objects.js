var playlist = { 'Mr Zim': 'Plamp' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  playlist.remove(artistName);
  return playlist;
};