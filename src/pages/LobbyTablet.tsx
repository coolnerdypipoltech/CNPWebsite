import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import '../styles/Lobby.css'
import city from '../assets/Lobby/City.webp'
import Godzilla from '../assets/Lobby/Godzilla.webp'
import Gundam from '../assets/Lobby/Gundam.webp'
import edificios from '../assets/Lobby/edificios.webp'

import Nube1 from '../assets/Lobby/Nube1.webp'
import Nube2 from '../assets/Lobby/Nube2.webp'
import Nube3 from '../assets/Lobby/Nube3.webp'
import Nube4 from '../assets/Lobby/Nube4.webp'
import Nube5 from '../assets/Lobby/Nube5.webp'
import IMG_Background from '../assets/Lobby/IMG_Background.webp'
import IMG_PISO from '../assets/Lobby/IMG_PISO.webp'
import Tv from '../assets/Lobby/Tv.webp'
import Edificio1 from '../assets/Lobby/Edificio1.webp'
import Edificio2 from '../assets/Lobby/Edificio2.webp'
import workstation4 from '../assets/Lobby/workstation4.webp'
import RightSide from '../assets/Lobby/RightSideCnp.webp'
import LeftSide from '../assets/Lobby/LeftSideCnp.webp'
import PingPong from '../assets/Lobby/PingPong.webp'
import CoffeeBook from '../assets/Lobby/CoffeBook.webp'
import Painting from '../assets/Lobby/Painting.webp'
import workstation3 from '../assets/Lobby/Forground_2.webp'
import workstation1 from '../assets/Lobby/Forground_1.webp'
import Alien_Yoga from '../assets/Lobby/Alien_Yoga.webp'
import Tapete from '../assets/Lobby/Tapete.webp'
import LobbyStars from '../assets/Lobby/LobbyStars.webp'
import Brand_CNP from '../assets/Lobby/Brand_CNP.webp'
import MatrixTv from '../components/MatrixTv'
import PopUp from '../components/PopUp'
import Cuadro_Game from '../assets/Lobby/Cuadro_Game.webp'
import Arbolnavidad from '../assets/Lobby/Arbolnavidad.webp'
import { useNavigate } from 'react-router-dom'
import FCLeft from '../assets/Lobby/FCLeft.webp'
import FCRight from '../assets/Lobby/FCRight.webp'
export default function Lobby() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${LobbyStars})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${city})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={0.5} speed={0.1} factor={1}>
          <div className="centerDiv">
            <img
              src={Nube1}
              className="lobby-Img"
              style={{ width: '40%', top: '30%', left: '0%', zIndex: 1, minWidth: '300px' }}
            />
            <img
              src={Nube2}
              className="lobby-Img"
              style={{ width: '30%', top: '25%', right: '2%', minWidth: '300px' }}
            />
            <img src={Nube3} className="lobby-Img" style={{ width: '30%', top: '2%', minWidth: '300px' }} />
            <img src={Nube4} className="lobby-Img" style={{ width: '100%', bottom: '-0%', minWidth: '600px' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={0} speed={0} factor={1}>
          <div className="centerDiv">
            <PopUp />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0} factor={1}>
          <div className="centerDiv">
            <img src={Nube5} className="lobby-Img" style={{ width: '35%', bottom: '0%', left: '0%', zIndex: 1 }} />
            <img
              src={Nube5}
              className="lobby-Img"
              style={{ width: '35%', bottom: '0%', right: '0%', zIndex: 1, scale: '-1 1 1' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={0.1} factor={0.5}>
          <img
            src={Godzilla}
            className="lobby-Img"
            style={{ width: '45%', height: '40vw', bottom: '5%', right: '0px' }}
          />
          <img src={Gundam} className="lobby-Img" style={{ width: '27%', bottom: '22%', left: '10%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0} factor={1}>
          <div style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <img
              src={edificios}
              style={{
                position: 'absolute',
                width: '100%',
                bottom: '0px',
                objectFit: 'cover',
                zIndex: 2,
                marginBottom: '-20%',
              }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0}
          factor={0.75}
          style={{
            backgroundImage: `url(${IMG_Background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2.25}
          speed={0}
          factor={0.5}
          style={{
            backgroundImage: `url(${IMG_PISO})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer style={{ zIndex: 5 }} offset={3} speed={0.2} factor={0.25}>
          <div className="centerDiv">
            <img src={Tv} className="lobby-Img" style={{ width: '35%', paddingBottom: '25%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.75} speed={0} factor={1}>
          <div className="centerDiv">
            <img src={workstation4} className="lobby-Img" style={{ width: '30%', paddingBottom: '8%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.4} speed={0.05} factor={0.25}>
          <div className="splitCenterDiv" style={{ position: 'absolute', bottom: '0px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <img src={LeftSide} style={{ width: '100%', height: '26vw', marginBottom: '0%', scale: '-1 1 1' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img src={RightSide} style={{ marginBottom: '10%', width: '100%', height: '26vw' }} />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.75} speed={0} factor={1}>
          <div className="centerDiv">
            <img
              src={Painting}
              className="lobby-Img"
              style={{ width: '15%', position: 'relative', left: '30%', top: '17%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.75} speed={0} factor={1}>
          <div className="centerDiv">
            <img
              src={CoffeeBook}
              className="lobby-Img"
              style={{ width: '12%', position: 'relative', left: '20%', top: '20%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={1.75} speed={0} factor={1}>
          <div className="centerDiv">
            <img
              src={PingPong}
              className="lobby-Img"
              style={{ width: '40%', position: 'relative', right: '25%', top: '25%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 1 }} offset={2.25} speed={0.1} factor={1}>
          <div className="splitCenterDiv">
            <img src={Edificio1} style={{ width: '30%', paddingBottom: '10%' }} />
            <img src={Edificio2} style={{ width: '30%', paddingBottom: '10%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={5.5} speed={1} factor={0.5}>
          <div className="splitCenterDiv">
            <img
              src={workstation1}
              className="lobby-Img"
              style={{ width: '20%', position: 'relative', left: '-0%', top: '35%' }}
            />
            <img
              src={workstation3}
              className="lobby-Img"
              style={{ width: '20%', position: 'relative', right: '-0%', top: '35%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 5 }} offset={1.75} speed={0} factor={1}>
          <div className="centerDiv">
            <img
              src={Tapete}
              className="lobby-Img"
              style={{ width: '20%', paddingBottom: '0%', position: 'relative', top: '10%' }}
            />
            <img
              src={Alien_Yoga}
              onClick={() => navigate('/game')}
              className="lobby-Img floating"
              style={{ width: '23%', paddingBottom: '0%', paddingLeft: '20px' }}
            />
            <img src={Cuadro_Game} onClick={() => navigate('/game')} className="lobby-Img floating" style={{ width: '5%', paddingBottom: '28%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={5.5} speed={1} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', gap: '0px', paddingBottom: '2%' }}>
            <img src={Brand_CNP} style={{ width: '12%', maxWidth: '75px' }} />
            <p style={{ marginTop: '30px' }} className="fontGoldenAgeOG">
              △
            </p>
            <p className="fontGoldenAgeOG" style={{ fontSize: '12px' }}>
              Scroll Up To Explore
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 4 }} offset={1.5} speed={0} factor={0.25}>
          <div style={{ width: '100%', height: '100%', position: 'relative', top: '-18vw' }}>
            <MatrixTv />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2} speed={0} factor={0.25}>
          <div className="centerDiv">
            <img
              src={Arbolnavidad}
              className="lobby-Img"
              style={{ width: '25%', paddingBottom: '0%', position: 'relative', top: '50%', right: '10%' }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 1 }} offset={2} speed={0} factor={0.5}>
          <div className="splitCenterDiv">
            <img
              src={FCLeft}
              className="lobby-Img"
              style={{ width: '30%', position: 'relative', left: '-0%', top: '-10%' }}
            />
            <img
              src={FCRight}
              className="lobby-Img"
              style={{ width: '30%', position: 'relative', right: '-0%', top: '-10%' }}
            />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}
