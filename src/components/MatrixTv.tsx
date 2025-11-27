import React, { useState } from 'react'

import Matrix from '../assets/Lobby/Matrix.webp'
import FunLab from '../assets/Lobby/FunLab.webp'
// @ts-ignore
import Crawl from './Crawl'

export default function MatrixTv() {
  const [showCrawl, setShowCrawl] = useState(false)

  const handleTextClick = () => {
    setShowCrawl(true)

    setTimeout(() => {
      setShowCrawl(false)
    }, 45000)
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 5,

        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {!showCrawl && (
            <p
              onClick={handleTextClick}
              style={{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '4vw',
                color: '#00B8E6',
                textAlign: 'center',
                zIndex: 2,
                cursor: 'pointer',
              }}
              className="fontGoldenAge"
            >
              ¿Qué es CNP?
            </p>
          )}

          {showCrawl && <Crawl title="Episode IV" subTitle="A New Hope" />}

          <img
            src={Matrix}
            style={{
              width: '100%',
            }}
          />

          <img
            src={FunLab}
            style={{
              position: 'absolute',
              width: '20%',
              left: '50%',
              transform: 'translate(-50%, -80%)',
              display: 'block',
            }}
          />
        </div>
      </div>
    </>
  )
}
