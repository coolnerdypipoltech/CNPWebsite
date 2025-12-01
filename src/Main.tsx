import React, { useEffect, useRef } from 'react'
import Lobby from './pages/Lobby'
import LobbyMobil from './pages/LobbyMobil'
import LobbyTablet from './pages/LobbyTablet'
import CultureMobil from './pages/Culture/CultureMobil'
import CultureTablet from './pages/Culture/CultureTablet'
import Culture from './pages/Culture/Culture'
import Founders from './pages/Founders/Founders'
import FoundersMobil from './pages/Founders/FoundersMobil'
import FoundersTablet from './pages/Founders/FoundersTablet'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import logo from './assets/Lobby/Brand_CNP.webp'
export default function Main() {
  const parallax = useRef<IParallax>(null!)

  let tempLobby = null
  let tempCulture = null
  let tempFounder = null
  let lobbyFactor = 5
  let cultureFactor = 5.5
  let founderFactor = 6.5

  if (window.innerWidth < 550) {
    console.log('Mobil')
    lobbyFactor = 2.25
    cultureFactor = 3
    founderFactor = 3
    tempLobby = <LobbyMobil />
    tempCulture = <CultureMobil />
    tempFounder = <FoundersMobil />
  } else {
    if (window.innerWidth < 1024) {
      console.log('Tablet')
      lobbyFactor = 2.75
      cultureFactor = 3
      founderFactor = 3.5
      tempLobby = <LobbyTablet />
      tempCulture = <CultureTablet />
      tempFounder = <FoundersTablet />
    } else {
      console.log('Desktop')
      tempLobby = <Lobby />
      tempCulture = <Culture />
      tempFounder = <Founders />
    }
  }

  console.log('lobbyFactor:', lobbyFactor + ' cultureFactor:', cultureFactor)

  useEffect(() => {
    parallax.current.scrollTo(lobbyFactor + cultureFactor + founderFactor)
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
        <Parallax ref={parallax} pages={lobbyFactor + cultureFactor + founderFactor}>
          <ParallaxLayer offset={0} speed={0} factor={founderFactor}>
            {tempFounder}
          </ParallaxLayer>
          <ParallaxLayer offset={founderFactor} speed={0} factor={cultureFactor}>
            {tempCulture}
          </ParallaxLayer>
          <ParallaxLayer offset={ founderFactor + cultureFactor} speed={0} factor={lobbyFactor}>
            {tempLobby}
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0, end: cultureFactor + lobbyFactor + founderFactor - 1.2 }} style={{ alignItems: 'center', justifyContent: 'flex-end', height: "120px" }}>
            <img src={logo} className='marginLogo' style={{ width: '10%', minWidth: '50px', maxWidth: "75px", marginLeft: '20px' }} />
        </ParallaxLayer>
        </Parallax>
      </div>
      <div className="overlayMenu">
        <p onClick={() => parallax.current.scrollTo(cultureFactor + lobbyFactor + founderFactor)} className="fontGoldenAgeOverlay">Home</p>
        <p onClick={() => parallax.current.scrollTo(founderFactor + cultureFactor)} className="fontGoldenAgeOverlay">Culture</p>
        <p onClick={() => parallax.current.scrollTo(founderFactor - 0.2)} className="fontGoldenAgeOverlay">Work</p>
        <p onClick={() => parallax.current.scrollTo(0)} className="fontGoldenAgeOverlay">Founders</p>
      </div>
      <div className='sideMenuOverlay'>
        <img src={logo} style={{width: '5%', minWidth: '30px', maxWidth: "50px"}} />
        <img src={logo} style={{width: '5%', minWidth: '30px', maxWidth: "50px"}} />
        <img src={logo} style={{width: '5%', minWidth: '30px', maxWidth: "50px"}} />
        <img src={logo} style={{width: '5%', minWidth: '30px', maxWidth: "50px"}} />
      </div>
    </>
  )
}
