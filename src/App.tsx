import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lobby from './pages/Lobby'
import LobbyMobil from './pages/LobbyMobil'
import LobbyTablet from './pages/LobbyTablet'
import Projects from './pages/Projects'
import Founders from './pages/Founders'
import Culture from './pages/Culture'
import DinoGame from './pages/DinoGame'

export default function App() {

  let tempLobby = null;

  if(window.innerWidth < 430){
    console.log("Mobil")
    tempLobby = <LobbyMobil />;
  } else {
    if(window.innerWidth < 1024){
      console.log("Tablet")
      tempLobby = <LobbyTablet />;
    }else{
      console.log("Desktop")
      tempLobby = <Lobby />;
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/CNPWebsite" element={tempLobby} />
        <Route path="/work" element={<Projects />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/dinogame" element={<DinoGame />} />
      </Routes>
    </Router>
  )
}
