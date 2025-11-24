import React, { useRef } from 'react'
import OverlayMenu from './overlayMenu'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import video1 from '../assets/test/Video1.mp4'


export default function Founders() {
  const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const parallax = useRef<IParallax>(null!)
  return (
    <>
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <div style={{width: "100%", display: "flex", justifyContent: "center", alignContent: "center"}}>
            <video
            style={{
              width: '50%',
              height: '100%',
            }}
            src={video1}
            loop
            autoPlay
          />
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ position: "absolute", display: 'block', width: '300px', top: "100px", left: "10%"}} />
          <img src={url('cloud')} style={{ position: "absolute", display: 'block', width: '300px', top: "200px", left: "15%" }} />
          <img src={url('cloud')} style={{ position: "absolute", display: 'block', width: '300px', top: "100px", right: "0px"}} />
          <img src={url('cloud')} style={{ position: "absolute", display: 'block', width: '300px', top: "300px", right: "10%" }} />
        </ParallaxLayer>

          <ParallaxLayer offset={2.5} speed={1} style={{ opacity: 0.1 }}>
            <div style={{width: "100%", paddingLeft: "10%", paddingRight: "10%", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '20%' }} />
            </div>
          </ParallaxLayer>


      </Parallax>
    </div>
    <OverlayMenu />
    </>
  )
}
