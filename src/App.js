import React , {useState} from "react";
//import styles
import './styles/app.scss';
//Adding Components
import Player from './componnents/Player'
import Song from './componnents/Song'
import Library from "./componnents/Library";
//import util
import data from './util'

function App() {
  //state 
  const [songs , setSongs ] = useState(data());
  const [ currentSong , setCurrentSong] =useState(songs[0]);
  const [isPlaying , setIsPlaying] = useState(false);
  return (
    <div className="App">
     <Song currentSong={currentSong} />
     <Player
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying} 
      currentSong={currentSong} 
    />
    <Library songs={songs} setCurrentSong ={setCurrentSong}/>
    </div>
  );
}

export default App;
