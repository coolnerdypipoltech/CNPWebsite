import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

import '../styles/Lobby.css'
import MatrixTv from '../components/MatrixTv'
import Mundo_CNP from '../assets/Lobby/Mobil/Mundo_CNP.png'
import Tv from '../assets/Lobby/Tv.webp'
import Alien_Yoga from '../assets/Lobby/Alien_Yoga.webp'
import Tapete from '../assets/Lobby/Tapete.webp'
import Brand_CNP from '../assets/Lobby/Brand_CNP.webp'
import PopUp from '../components/PopUp'
import workstation3 from '../assets/Lobby/Forground_2.webp'
import workstation1 from '../assets/Lobby/Forground_1.webp'
import Cuadro_Game from '../assets/Lobby/Cuadro_Game.webp'
import { useNavigate } from 'react-router-dom'
export default function Lobby() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <ParallaxLayer offset={-0.5} speed={0} factor={3.25}
          style={{
            backgroundImage: `url(${Mundo_CNP})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer style={{ zIndex: 5 }} offset={1} speed={0.1} factor={0.75}>
          <div className="centerDiv">
            <PopUp />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={2.65} speed={0.1} factor={0.25}>
          <div className="centerDiv">
            <img src={Tv} className="lobby-Img" style={{ width: '45%', paddingBottom: '0%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={2.2} speed={0} factor={0.25}>
          <div className="centerDiv" >
            <img
              src={Tapete}
              className="lobby-Img"
              style={{ width: '33%', paddingBottom: '0%', position: 'relative', top: '15%' }}
            />
            <img src={Alien_Yoga} onClick={() => navigate('/game')} className="lobby-Img floating" style={{ width: '40%', paddingBottom: '16%', paddingLeft: "10px" }} />
            <img src={Cuadro_Game} onClick={() => navigate('/game')} className="lobby-Img floating" style={{ width: '10%', paddingBottom: '62%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={4.4} speed={0.3} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-start', gap: '0px' }}>
            <img src={Brand_CNP} style={{ width: '13%' }} />
            <p style={{ marginTop: '30px' }} className="fontGoldenAgeOG">
              △
            </p>
            <p className="fontGoldenAgeOG" style={{ fontSize: '12px' }}>
              Scroll Up To Explore
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }}  offset={4.4} speed={0.3} factor={0.5}>
          <div className="splitCenterDiv" style={{ alignItems: 'flex-start', gap: '0px', paddingBottom: '0%' }}>
            <img
              src={workstation1}
              className="lobby-Img"
              style={{ width: '40%', position: 'relative', left: '0%', top: '8%' }}
            />
            <img
              src={workstation3}
              className="lobby-Img"
              style={{ width: '40%', position: 'relative', right: '0%', top: '8%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={1.4} speed={0} factor={0.25}>
          <div className='MatrixContainerMobil' style={{ height: '100%', position: 'relative' }}>
            <MatrixTv />
          </div>
        </ParallaxLayer>

      </div>
    </>
  )
}
