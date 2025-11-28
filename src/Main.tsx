import React, { useEffect, useRef } from 'react'
import Lobby from './pages/Lobby'
import LobbyMobil from './pages/LobbyMobil'
import LobbyTablet from './pages/LobbyTablet'
import CultureMobil from './pages/Culture/CultureMobil'
import CultureTablet from './pages/Culture/CultureTablet'
import Culture from './pages/Culture/Culture'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

export default function Main() {
  const parallax = useRef<IParallax>(null!)

  let tempLobby = null
  let tempCulture = null
  let lobbyFactor = 5
  let cultureFactor = 5.5

  if (window.innerWidth < 550) {
    console.log('Mobil')
    lobbyFactor = 2.25
    cultureFactor = 3
    tempLobby = <LobbyMobil />
    tempCulture = <CultureMobil />
  } else {
    if (window.innerWidth < 1024) {
      console.log('Tablet')
      cultureFactor = 3
      lobbyFactor = 2.75
      tempLobby = <LobbyTablet />
      tempCulture = <CultureTablet />
    } else {
      console.log('Desktop')
      tempLobby = <Lobby />
      tempCulture = <Culture />
    }
  }

  console.log('lobbyFactor:', lobbyFactor + ' cultureFactor:', cultureFactor)

  useEffect(() => {
    parallax.current.scrollTo(lobbyFactor + cultureFactor)
  }, [])

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column-reverse',
          overflowX: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <Parallax ref={parallax} pages={lobbyFactor + cultureFactor}>
          <ParallaxLayer offset={0} speed={0} factor={cultureFactor}>
            {tempCulture}
          </ParallaxLayer>
          <ParallaxLayer offset={cultureFactor} speed={0} factor={lobbyFactor}>
            {tempLobby}
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="overlayMenu">
        <p onClick={() => parallax.current.scrollTo(cultureFactor + lobbyFactor)} className="fontGoldenAgeOverlay">Home</p>
        <p onClick={() => parallax.current.scrollTo(cultureFactor)} className="fontGoldenAgeOverlay">Culture</p>
        <p onClick={() => parallax.current.scrollTo(0)} className="fontGoldenAgeOverlay">Work</p>
        <p onClick={() => parallax.current.scrollTo(0)} className="fontGoldenAgeOverlay">Founders</p>
      </div>
    </>
  )
}
