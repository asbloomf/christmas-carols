$(function(){
  var _playMIDI = function(url) {
    player = MIDI.Player;
    player.timeWarp = 1; // speed the song is played back
    player.loadFile(url, player.start);
  }
  var playMIDI = function(url) {
    MIDI.loader = new widgets.Loader;
    MIDI.loadPlugin(function(){
      _playMIDI(url);
      window.playMIDI = _playMIDI;
      MIDI.loader.stop();
    });
  };
  window.playMIDI = playMIDI;
});