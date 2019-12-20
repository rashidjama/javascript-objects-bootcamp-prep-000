let playlist = {
  bob: "baffalo",
  };
function updatePlaylist(playlist, singer, songTitle) {
  playlist[singer] = songTitle;

  return playlist;
}