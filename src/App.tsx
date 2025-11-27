import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lobby from './pages/Lobby'
import LobbyMobil from './pages/LobbyMobil'
import LobbyTablet from './pages/LobbyTablet'
import CultureMobil from './pages/Culture/CultureMobil'
import CultureTablet from './pages/Culture/CultureTablet'
import Projects from './pages/Projects'
import Founders from './pages/Founders'
import Culture from './pages/Culture/Culture'
import DinoGame from './pages/DinoGame'
import Test from './pages/Test'

export default function App() {

  let tempLobby = null;
  let tempCulture = null;

  if(window.innerWidth < 550){
    console.log("Mobil")
    tempLobby = <LobbyMobil />;
    tempCulture = <CultureMobil />;
  } else {
    if(window.innerWidth < 1024){
      console.log("Tablet")
      tempLobby = <LobbyTablet />;
      tempCulture = <CultureTablet />;
    }else{
      console.log("Desktop")
      tempLobby = <Lobby />;
      tempCulture = <Culture />;
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/CNPWebsite" element={tempLobby} />
        <Route path="/CNPWebsite/work" element={<Projects />} />
        <Route path="/CNPWebsite/founders" element={<Founders />} />
        <Route path="/CNPWebsite/culture" element={tempCulture} />
        <Route path="/CNPWebsite/dinogame" element={<DinoGame />} />
        <Route path="/CNPWebsite/test" element={<Test />} />
      </Routes>
    </Router>
  )
}
