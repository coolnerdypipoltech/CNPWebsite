import React, { useState } from 'react'

import Matrix from '../assets/Lobby/Matrix.webp'

// @ts-ignore
import Crawl from "./Crawl";

export default function MatrixTv() {
  const [showCrawl, setShowCrawl] = useState(false);

  const handleTextClick = () => {
    setShowCrawl(true);
    
    setTimeout(() => {
      setShowCrawl(false);
    }, 32000);
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0f3460',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          position: 'absolute',
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
                fontSize: '2rem',
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

          {showCrawl && (
            <Crawl title="Episode IV" subTitle="A New Hope"/>
          )}

          <img
            src={Matrix}
            style={{
              width: '100%',
              display: 'block',
            }}
          />
        </div>
      </div>
    </>
  )
}


