class Helper {
  playPauseAndUpdate (song) {
    player.playPause (song);
    totalTimeDiv.text(player.getDuration());
  }
}

const helper = new Helper();
