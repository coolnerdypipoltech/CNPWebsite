import React from 'react'

import OverlayMenu from './overlayMenu'

export default function Culture() {
  return (
    <>
    <div style={{
      width: '100%',
      height: '100vh',
      background: '#0f3460',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Culture</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '800px', textAlign: 'center', marginBottom: '2rem' }}>
        Culture
      </p>
    </div>
    <OverlayMenu />
    </>
  )
}
