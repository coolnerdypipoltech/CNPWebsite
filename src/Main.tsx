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
import Email from './assets/Main/Email.png'
import Instagram from './assets/Main/Instagram.png'
import Linkedin from './assets/Main/LinkedIn.png'
import Flecha from './assets/Culture/IMG_Flecha.webp'
export default function Main() {
  const parallax = useRef<IParallax>(null!)
  const mobileFlag = useRef(false);

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  let tempLobby = null
  let tempCulture = null
  let tempFounder = null
  let lobbyFactor = 5
  let cultureFactor = 5.5
  let founderFactor = 6.5
  let findCultureOffset = 5

  if (window.innerWidth < 550 && isMobileDevice()) {
    console.log("MOBILE DEVICE DETECTED", isMobileDevice())
    mobileFlag.current = true
    lobbyFactor = 2.75
    cultureFactor = 4
    founderFactor = 4.5
    findCultureOffset = cultureFactor - 0.75
    tempLobby = <LobbyMobil />
    tempCulture = <CultureMobil />
    tempFounder = <FoundersMobil />
  } else {
    if (window.innerWidth < 1024) {
      lobbyFactor = 2.75
      cultureFactor = 3
      founderFactor = 3.5
      findCultureOffset = cultureFactor + 0.15
      tempLobby = <LobbyTablet />
      tempCulture = <CultureTablet />
      tempFounder = <FoundersTablet />
    } else {
      findCultureOffset = 5.5 + 0.8
      tempLobby = <Lobby />
      tempCulture = <Culture />
      tempFounder = <Founders />
    }
  }


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
          <ParallaxLayer style={{ zIndex: 4 }} offset={founderFactor + cultureFactor} speed={0.1} factor={0.25}>
            {mobileFlag.current && (<div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
              <img src={Flecha} style={{ height: '100px', position: 'relative', top: '-100%' }} />
            </div>)}
          </ParallaxLayer>
          
          <ParallaxLayer offset={founderFactor + cultureFactor} speed={0} factor={lobbyFactor}>
            {tempLobby}
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 0, end: cultureFactor + lobbyFactor + founderFactor - 1.2 }}
            style={{ alignItems: 'center', justifyContent: 'flex-end', height: '120px' }}
          >
            <div className="LogoContainer">
              <img src={logo} className="marginLogo" style={{}} />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className="overlayMenu">
        <p className="fontGoldenAgeOverlay">·</p>
        <p
          onClick={() => parallax.current.scrollTo(cultureFactor + lobbyFactor + founderFactor)}
          className="fontGoldenAgeOverlay"
        >
          Home
        </p>
        <p className="fontGoldenAgeOverlay">·</p>
        <p onClick={() => parallax.current.scrollTo(founderFactor + cultureFactor)} className="fontGoldenAgeOverlay">
          Culture
        </p>
        <p className="fontGoldenAgeOverlay">·</p>
        <p onClick={() => parallax.current.scrollTo(findCultureOffset)} className="fontGoldenAgeOverlay">
          Work
        </p>
        <p className="fontGoldenAgeOverlay">·</p>
        <p onClick={() => parallax.current.scrollTo(0.75)} className="fontGoldenAgeOverlay">
          Founders
        </p>
        <p className="fontGoldenAgeOverlay">·</p>
      </div>

      <div className="sideMenuOverlay" style={{ position: 'absolute' }}>
        <img
          className='socialMediaIcons'
          src={Linkedin}
          onClick={() => window.open('https://www.linkedin.com/company/coolnerdypeople', '_blank')}
          style={{ width: '5%', minWidth: '35px', maxWidth: '50px' }}
        />
        <img
          className='socialMediaIcons'
          src={Instagram}
          onClick={() => window.open('https://www.instagram.com/coolnerdypeople/', '_blank')}
          style={{ width: '5%', minWidth: '35px', maxWidth: '50px' }}
        />
        <img
          className='socialMediaIcons'
          src={Email}
          onClick={() => window.open('mailto:hola@coolnerdypipol.com')}
          style={{ width: '5%', minWidth: '35px', maxWidth: '50px' }}
        />
      </div>
    </>
  )
}
