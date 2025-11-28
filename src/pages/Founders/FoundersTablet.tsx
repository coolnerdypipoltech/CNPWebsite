import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

import background from '../../assets/Founders/background.png'
import Globe1 from '../../assets/Founders/Globe1.webp'
import Globe2 from '../../assets/Founders/Globe2.webp'
import spacheship1 from '../../assets/Founders/spaceship1.webp'
import Asteroide from '../../assets/Founders/Asteroide.webp'
import spaceship2 from '../../assets/Founders/spaceship2.webp'
import ovni from '../../assets/Founders/ovni.webp'
import desk from '../../assets/Founders/desk.webp'
import founder1 from '../../assets/Founders/founder1.webp'
import founder2 from '../../assets/Founders/founder2.webp'
import table from '../../assets/Founders/table.webp'
import tv from '../../assets/Founders/tv.webp'
import Pantallas from '../../assets/Founders/Pantalas.webp'
export default function Founders() {
  return (
    <>
      <div>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={0}
          factor={1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer style={{ zIndex: 1 }} offset={0.25} speed={0} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Pantallas} style={{ width: '90vw', position: 'relative', top: '40%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.75} speed={0} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', position: 'relative' }}>
            <div style={{ position: 'relative', width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '0%' }}>
              <img src={tv} style={{ width: '100%', display: 'block' }} />
              <div style={{ 
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                textAlign: 'center',
                width: '80%'
              }}>
                <p className="fontGoldenAgeOverlay" style={{ color: '#1148c9', fontSize: '6VW' }}>
                  CONTACT
                </p>
                <p className="fontGoldenAgeOverlay" style={{ color: '#1148c9', fontSize: '3VW' }}>
                  READY TO BUILD SOMETHING BOLD
                </p>
                <p className="fontGoldenAgeOverlay" style={{ color: '#1148c9', fontSize: '3VW' }}>
                  AND BRILLIANTLY UNEXPECTED?
                </p>
                <p className="fontGoldenAgeOverlay" style={{ color: '#1148c9', fontSize: '3VW', paddingTop: '5px' }}>
                  SEND A SIGNAL TO
                </p>
                <p className="fontGoldenAgeOverlay" style={{ color: '#1148c9', fontSize: '3VW' }}>
                  HOLA@COOLNERDYPIPOL.COM
                </p>
                <p className="fontGoldenAgeOverlay" style={{ color: '#1148c9', fontSize: '3VW', paddingTop: '5px' }}>
                  WE'LL PICK IT UP
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.95} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Globe1} style={{ width: '60vw', position: 'relative', top: '0%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.95} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={table} style={{ width: '60vw' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.1} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <div className="splitCenterDiv" style={{ width: '30vw', position: 'relative', top: '22vw' }}>
              <img src={founder1} style={{ width: '15vw' }} />
              <img src={founder2} style={{ width: '15vw' }} />
            </div>
            <img src={desk} style={{ width: '60vw' }} />
            <p
              className="fontGoldenAgeOverlay"
              style={{ color: 'white', fontSize: '40px', position: 'relative', top: '10%' }}
            >
              Founders
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.6} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={ovni} style={{ width: '80vw', position: 'relative', left: '-45vw' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.6} speed={0} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={spaceship2} style={{ width: '40vw', position: 'relative', right: '-30%', scale: '-1 1 1' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.8} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Asteroide} style={{ width: '20vw', position: 'relative', right: '35%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.8} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={spacheship1} style={{ width: '80vw', position: 'relative', left: '20%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.5} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Globe2} style={{ width: '130vw', position: 'relative', top: '0%' }} />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}
