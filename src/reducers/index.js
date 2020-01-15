import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'SICKO MODE', duration: '5:13' },
    { title: 'Can You Get to That', duration: '2:52' },
    { title: 'Solo Dancer', duration: '6:39' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if( action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong; 
}

export default combineReducers({
  songs: songsReducer, 
  selectedSong: selectedSongReducer
})