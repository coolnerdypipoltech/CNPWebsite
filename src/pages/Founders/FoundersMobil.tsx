import React, { useState, useEffect, useRef } from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import ContactUs from '../../assets/Founders/ContactUs.png'
import background from '../../assets/Founders/background.png'
import Globe1 from '../../assets/Founders/Globe1.webp'
import Globe2 from '../../assets/Founders/Globe2.webp'
import spacheship1 from '../../assets/Founders/spaceship1.webp'
import Asteroide from '../../assets/Founders/Asteroide.webp'
import spaceship2 from '../../assets/Founders/spaceship2.webp'
import ovni from '../../assets/Founders/ovni.webp'
import desk from '../../assets/Founders/desk.webp'
import founder1 from '../../assets/Founders/founder1.webp'
import founder2 from '../../assets/Founders/Andrea.webp'
import table from '../../assets/Founders/table.webp'
import tv from '../../assets/Founders/Tv.webp'
import select from '../../assets/Founders/Select.webp'
import IMG_Dial_Pez from '../../assets/Founders/IMG_Dial_Pez.webp'
import IMG_Dial_Andrea from '../../assets/Founders/IMG_Dial_Andrea.webp'
import Screens from '../../components/Screens'
import background2 from '../../assets/Founders/Mobil/background.png'
import xButton from '../../assets/Founders/Mobil/Button_X.webp'
export default function Founders() {
  const [showFounder1Text, setShowFounder1Text] = useState(false)
  const [showFounder2Text, setShowFounder2Text] = useState(false)
  const founder1BubbleRef = useRef<HTMLDivElement>(null)
  const founder2BubbleRef = useRef<HTMLDivElement>(null)
  const founder1ImgRef = useRef<HTMLImageElement>(null)
  const founder2ImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      // Verificar si el click fue fuera del bubble 1 y su imagen
      if (
        showFounder1Text &&
        founder1BubbleRef.current &&
        !founder1BubbleRef.current.contains(target) &&
        founder1ImgRef.current &&
        !founder1ImgRef.current.contains(target)
      ) {
        setShowFounder1Text(false)
      }

      // Verificar si el click fue fuera del bubble 2 y su imagen
      if (
        showFounder2Text &&
        founder2BubbleRef.current &&
        !founder2BubbleRef.current.contains(target) &&
        founder2ImgRef.current &&
        !founder2ImgRef.current.contains(target)
      ) {
        setShowFounder2Text(false)
      }
    }

    // Agregar el event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Limpiar el event listener al desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showFounder1Text, showFounder2Text])

  const handleFounder1Click = () => {
    setShowFounder1Text(!showFounder1Text)
    setShowFounder2Text(false)
  }

  const handleFounder2Click = () => {
    setShowFounder2Text(!showFounder2Text)
    setShowFounder1Text(false)
  }

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
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer style={{ zIndex: 1 }} offset={0.2} speed={0} factor={0.1}>
          <div className="centerDiv" style={{ justifyContent: 'flex-start' }}>
            <p style={{ fontSize: '12px', marginTop: '20px', fontWeight: 'bold' }} className="fontGoldenAge">
              © 2025 Cool Nerdy People
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 1 }} offset={0.3} speed={0} factor={0.25}>
          <Screens width="100vw" top="45%" />
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={0.7} speed={0} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '80vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '-10%',
              }}
            >
              <img src={tv} style={{ width: '100%', display: 'block' }} />
              <img
                src={ContactUs}
                style={{ width: '35%', position: 'absolute', top: '78%' }}
                onClick={() => window.open('mailto:hola@coolnerdypipol.com')}
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.8} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Globe1} style={{ width: '60vw', position: 'relative', top: '-10%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={0.8} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={table} style={{ width: '60vw' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={0.9} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end', position: 'relative' }}>
            <div className="splitCenterDiv" style={{ width: '50vw', position: 'relative', top: '35%', left: '-5vw' }}>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  ref={founder1ImgRef}
                  src={founder1}
                  onClick={handleFounder1Click}
                  style={{ width: '25vw', cursor: 'pointer' }}
                />
                {showFounder1Text && (
                  <div
                    ref={founder1BubbleRef}
                    style={{
                      position: 'absolute',
                      top: '-190%',
                      marginLeft: '40vw',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 20,
                    }}
                  >
                    <img src={IMG_Dial_Pez} style={{ width: '80vw' }} />
                    <img
                      onClick={handleFounder1Click}
                      className="xButtonFounder"
                      src={xButton}
                      style={{ width: '25px', position: 'relative', top: '-27vw', left: '-10px', cursor: 'pointer' }}
                    />
                  </div>
                )}
              </div>
              {!showFounder1Text && (
                <div
                  className="splitCenterDiv"
                  style={{
                    width: '30vw',
                    height: '20px',
                    position: 'relative',
                    top: '-25vw',
                    left: '-18vw',
                    zIndex: 5,
                  }}
                >
                  <img onClick={handleFounder1Click} className="floating " src={select} style={{ width: '45px' }} />
                </div>
              )}

              {showFounder1Text && (
                <div
                  className="splitCenterDiv"
                  style={{ width: '30vw', height: '20px', position: 'relative', top: '-15vw', left: '-1vw' }}
                >
                  <div style={{ minWidth: '45px' }} />
                </div>
              )}

              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  ref={founder2ImgRef}
                  src={founder2}
                  onClick={handleFounder2Click}
                  style={{ width: '25vw', position: 'relative', scale: '1 0.9 1', cursor: 'pointer' }}
                />
                {showFounder2Text && (
                  <div
                    ref={founder2BubbleRef}
                    style={{
                      position: 'absolute',
                      top: '-190%',
                      marginLeft: '-34vw',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      zIndex: 20,
                    }}
                  >
                    <img src={IMG_Dial_Andrea} style={{ width: '80vw' }} />
                    <img
                      onClick={handleFounder2Click}
                      className="xButtonFounder"
                      src={xButton}
                      style={{ width: '25px', position: 'relative', top: '-27vw', right: '82vw', cursor: 'pointer' }}
                    />
                  </div>
                )}
              </div>

              {!showFounder2Text && (
                <div
                  className="splitCenterDiv"
                  style={{
                    width: '30vw',
                    height: '20px',
                    position: 'relative',
                    top: '-25vw',
                    left: '-19vw',
                    zIndex: 5,
                  }}
                >
                  <img onClick={handleFounder2Click} className="floating " src={select} style={{ width: '45px' }} />
                </div>
              )}

              {showFounder2Text && (
                <div
                  className="splitCenterDiv"
                  style={{ width: '30vw', height: '20px', position: 'relative', top: '-15vw', left: '-10vw' }}
                >
                  <div style={{ minWidth: '45px' }} />
                </div>
              )}
            </div>
            <img src={desk} style={{ width: '80vw' }} />
            <p
              className="fontGoldenAgeOverlay"
              style={{ color: 'white', fontSize: '40px', position: 'relative', top: '20%', marginTop: "30px" }}
            >
              Founders
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.5} speed={0} factor={0.5}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={ovni} style={{ width: '100vw', position: 'relative', left: '-35%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.4} speed={0} factor={0.25}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={spaceship2} style={{ width: '50vw', position: 'relative', right: '-30%', scale: '-1 1 1' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.75} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Asteroide} style={{ width: '20vw', position: 'relative', right: '35%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 3 }} offset={1.75} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={spacheship1} style={{ width: '90vw', position: 'relative', left: '20%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer style={{ zIndex: 2 }} offset={2.25} speed={0} factor={0.75}>
          <div className="centerDiv" style={{ justifyContent: 'flex-end' }}>
            <img src={Globe2} style={{ width: '130vw', position: 'relative', top: '0%' }} />
          </div>
        </ParallaxLayer>
      </div>
    </>
  )
}
