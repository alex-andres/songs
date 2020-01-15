import React from 'react';
import { selectSong } from '../actions';

import SongList from './songList';
const App = () =>{
  return(
    <div>
      <SongList />
    </div>
  )
}

export default App;