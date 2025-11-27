import React from 'react'

import OverlayMenu from './overlayMenu'
import MatrixTv from '../components/MatrixTv'
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
      <MatrixTv />
    </div>
    <OverlayMenu />
    </>
  )
}
