import React from "react";
import './styles/app.scss';
//Adding Components
import Player from './componnents/Player'
import Song from './componnents/Song'

function App() {
  return (
    <div className="App">
     <Song />
     <Player />
    </div>
  );
}

export default App;
