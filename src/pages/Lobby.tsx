import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import OverlayMenu from './overlayMenu'

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Lobby() {
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
            <img src={url('satellite4')} style={{ width: '15%' }} />
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%' }} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.5} style={{ opacity: 0.1 }}>
          <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
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
