import React, { useRef, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import OverlayMenu from './overlayMenu'
import '../styles/Lobby.css'
import city from '../assets/Lobby/City.webp'
import Godzilla from '../assets/Lobby/Godzilla.webp'
import Gundam from '../assets/Lobby/Gundam.webp'
import edificios from '../assets/Lobby/edificios.webp'
import PopUp from '../assets/Lobby/PopUp.webp'
import Nube1 from '../assets/Lobby/Nube1.webp'
import Nube2 from '../assets/Lobby/Nube2.webp'
import Nube3 from '../assets/Lobby/Nube3.webp'
import Nube4 from '../assets/Lobby/Nube4.webp'
import Nube5 from '../assets/Lobby/Nube5.webp'
import Matrix from '../assets/Lobby/Matrix.webp'
import IMG_Background from '../assets/Lobby/IMG_Background.webp'
import IMG_PISO from '../assets/Lobby/IMG_PISO.webp'
import FunLab from '../assets/Lobby/FunLab.webp'
import Tv from '../assets/Lobby/Tv.webp'
import Edificio1 from '../assets/Lobby/Edificio1.webp'
import Edificio2 from '../assets/Lobby/Edificio2.webp'
import workstation4 from '../assets/Lobby/workstation4.webp'
import RightSide from '../assets/Lobby/RightSideCnp.webp'
import LeftSide from '../assets/Lobby/LeftSideCnp.webp'
import PingPong from '../assets/Lobby/PingPong.webp'
import CoffeeBook from '../assets/Lobby/CoffeBook.webp'
import Painting from '../assets/Lobby/Painting.webp'
import workstation3 from '../assets/Lobby/workstation3.webp'
import workstation1 from '../assets/Lobby/workstation.webp'
import Alien_Yoga from '../assets/Lobby/Alien_Yoga.webp'
import Tapete from '../assets/Lobby/Tapete.webp'
import LobbyStars from '../assets/Lobby/LobbyStars.webp'
import Brand_CNP from '../assets/Lobby/Brand_CNP.webp'
export default function Lobby() {
  const parallax = useRef<IParallax>(null!)

  useEffect(() => {
    parallax.current.scrollTo(4)
  }, [])

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#253237',
          display: 'flex',
          flexDirection: 'column-reverse',
          overflowX: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <Parallax ref={parallax} pages={5}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={2}
            style={{
              backgroundImage: `url(${LobbyStars})`,
              backgroundSize: 'cover',
            }}
          />


          <ParallaxLayer
            offset={1.5}
            speed={0}
            factor={1.5}
            style={{
              backgroundImage: `url(${city})`,
              backgroundSize: 'cover',
            }}
          />



          <ParallaxLayer offset={0} speed={0.1} factor={1}>
            <div className="centerDiv">
              <img src={Nube1} className="lobby-Img" style={{ width: '40%', top: '30%', left: '0%', zIndex: 1 }} />
              <img src={Nube2} className="lobby-Img" style={{ width: '30%', top: '25%', right: '2%' }} />
              <img src={Nube3} className="lobby-Img" style={{ width: '30%', top: '2%' }} />
              <img src={Nube4} className="lobby-Img" style={{ width: '100%', top: '43%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0} factor={1}>
            <div className="centerDiv">
              <img src={Nube5} className="lobby-Img" style={{ width: '35%', top: '115%', left: '0%', zIndex: 1 }} />
              <img
                src={Nube5}
                className="lobby-Img"
                style={{ width: '35%', top: '115%', right: '0%', zIndex: 1, scale: '-1 1 1' }}
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.1}  factor={1}>
            <img src={Godzilla} className="lobby-Img" style={{ width: '45%', height: "40vw", bottom: '20%', right: '0px' }} />
            <img src={Gundam} className="lobby-Img" style={{ width: '27%', bottom: '30%', left: '10%' }} />
          </ParallaxLayer>

          
          <ParallaxLayer offset={2} speed={0} factor={1}>
            <div style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <img
                src={edificios}
                style={{ position: 'absolute', width: '100%', bottom: '0px', objectFit: 'cover', zIndex: 2, marginBottom: "-20%" }}
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0}
            factor={2}
            style={{
              backgroundImage: `url(${IMG_Background})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={0} speed={0}  factor={2}>
            <div className="centerDiv" style={{justifyContent: "flex-start"}}>
              <img src={PopUp} style={{ width: '50%', paddingTop: '8%', zIndex: 2 }} />
            </div>
          </ParallaxLayer>





          <ParallaxLayer offset={3} speed={0} factor={2}>
            <img
              src={Matrix}
              className="lobby-Img"
              style={{ width: '100%', top: '7%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
            />
            <p style={{ paddingBottom: '63%', top: "26%", fontSize: "51px",  position: "absolute", zIndex: 3, color: "#00B8E6", left: '50%', transform: 'translate(-50%, -50%)' }} className='fontGoldenAge'>Que es CNP?</p>
            <img
              src={FunLab}
              className="lobby-Img"
              style={{ width: '18%', top: '24%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.5}
            speed={0}
            factor={0.5}
            style={{
              backgroundImage: `url(${IMG_PISO})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0.2} factor={1}>
            <div className="centerDiv">
              
              <img src={Tv} className="lobby-Img" style={{ width: '35%', paddingBottom: '65%' }} />
              <p style={{ paddingBottom: '58%', position: "absolute", zIndex: 3, color: "#00B8E6" }} className='fontGoldenAge'>PLAY</p>
            </div>
            
          </ParallaxLayer>

          

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0} factor={1}>
            <div className="centerDiv">
              <img src={workstation4} className="lobby-Img" style={{ width: '30%', paddingBottom: '8%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0.05} factor={1}>
            <div className="splitCenterDiv" style={{ position: 'absolute', bottom: '0px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <img src={LeftSide} style={{ width: '100%', height: "26vw", marginBottom: "30%", scale: '-1 1 1' }} />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img src={RightSide} style={{ marginBottom: '30%', width: '100%', height: "26vw" }} />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0} factor={1}>
            <div className="centerDiv">
              <img
                src={Painting}
                className="lobby-Img"
                style={{ width: '10%', position: 'relative', left: '30%', top: '10%' }}
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0} factor={1}>
            <div className="centerDiv">
              <img
                src={CoffeeBook}
                className="lobby-Img"
                style={{ width: '20%', position: 'relative', left: '22%', top: '15%' }}
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0} factor={1}>
            <div className="centerDiv">
              <img
                src={PingPong}
                className="lobby-Img"
                style={{ width: '40%', position: 'relative', right: '25%', top: '20%' }}
              />
            </div>
          </ParallaxLayer>


          <ParallaxLayer style={{ zIndex: 1 }} offset={4} speed={0.1} factor={1}>
            <div className="splitCenterDiv">
              <img src={Edificio1} style={{ width: '30%', paddingBottom: '43%' }} />
              <img src={Edificio2} style={{ width: '30%', paddingBottom: '43%' }} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={1} factor={1}>
            <div className="splitCenterDiv">
              <img
                src={workstation1}
                className="lobby-Img"
                style={{ width: '40%', position: 'relative', left: '-24%', top: '45%' }}
              />
              <img
                src={workstation3}
                className="lobby-Img"
                style={{ width: '40%', position: 'relative', right: '-27%', top: '47%' }}
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={0} factor={1}>
            <div className="centerDiv">
              <img src={Tapete} className="lobby-Img" style={{ width: '12%', paddingBottom: '0%', position: "relative", top: "12%" }} />
              <img src={Alien_Yoga} className="lobby-Img floating" style={{ width: '15%', paddingBottom: '0%' }} />
              
            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ zIndex: 2 }} offset={4} speed={1} factor={1}>
            <div className="centerDiv" style={{ justifyContent: "flex-end", gap: "0px", paddingBottom: "2%"}}>
              <img src={Brand_CNP} style={{ width: '10%' }} />
              <p style={{marginTop: "20px"}} className='fontGoldenAge'>△</p>
              <p className='fontGoldenAge'>Scroll To Explore</p>

            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
      <OverlayMenu />
    </>
  )
}
