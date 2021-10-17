import React , {useState} from "react";
//import styles
import './styles/app.scss';
//Adding Components
import Player from './componnents/Player'
import Song from './componnents/Song'
//import util
import data from './util'

function App() {
  //state 
  const [songs , setSongs ] = useState(data());
  const [ currentSong , steCurrentSong] =useState(songs[0]);
  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
