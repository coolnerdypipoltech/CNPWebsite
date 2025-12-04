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
import workstation3 from '../assets/Lobby/workstation3.webp'
import workstation1 from '../assets/Lobby/workstation.webp'


export default function Lobby() {
  return (
    <>
      <div>
        <ParallaxLayer style={{ zIndex: 1 }} offset={0} speed={0} factor={2.75}>
          <div className="centerDiv" style={{  height: '100%', transform: 'scale(0.77)' }}>
            <img src={Mundo_CNP} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={1} speed={0.1} factor={0.75}>
          <div className="centerDiv">
            <PopUp />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={2.75} speed={0.1} factor={0.25}>
          <div className="centerDiv">
            <img src={Tv} className="lobby-Img" style={{ width: '45%', paddingBottom: '0%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={2.3} speed={0} factor={0.25}>
          <div className="centerDiv">
            <img
              src={Tapete}
              className="lobby-Img"
              style={{ width: '12%', paddingBottom: '0%', position: 'relative', top: '15%' }}
            />
            <img src={Alien_Yoga} className="lobby-Img floating" style={{ width: '15%', paddingBottom: '0%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={4.5} speed={0.3} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-start', gap: '0px', paddingTop: '4%' }}>
            <img src={Brand_CNP} style={{ width: '13%' }} />
            <p style={{ marginTop: '30px' }} className="fontGoldenAge">
              △
            </p>
            <p className="fontGoldenAgeOG" style={{ fontSize: '12px' }}>
              Scroll Up To Explore
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }}  offset={4.5} speed={0.3} factor={0.5}>
          <div className="splitCenterDiv" style={{ alignItems: 'flex-start', gap: '0px', paddingBottom: '0%' }}>
            <img
              src={workstation1}
              className="lobby-Img"
              style={{ width: '40%', position: 'relative', left: '-24%', top: '20%' }}
            />
            <img
              src={workstation3}
              className="lobby-Img"
              style={{ width: '40%', position: 'relative', right: '-27%', top: '20%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={1.6} speed={0} factor={0.25}>
          <div className='MatrixContainerMobil' style={{ height: '100%', position: 'relative' }}>
            <MatrixTv />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}
