import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Unity, useUnityContext } from "react-unity-webgl"

export default function UnityGame() {
  const navigate = useNavigate()
  const { unityProvider, isLoaded, loadingProgression, sendMessage } = useUnityContext({
    loaderUrl: "/Build.loader.js",
    dataUrl: "/Build.data",
    frameworkUrl: "/Build.framework.js",
    codeUrl: "/Build.wasm",
  })

  // Estados para el micrófono
  const [micPermission, setMicPermission] = useState<boolean | null>(null)
  const [noiseLevel, setNoiseLevel] = useState(0)
  const [micActive, setMicActive] = useState(false)
  
  // Referencias para el audio
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const micStreamRef = useRef<MediaStream | null>(null)
  const animationFrameRef = useRef<number>()
  const lastJumpTimeRef = useRef<number>(0)

  // Constantes
  const JUMP_THRESHOLD = 30


  function handleJump() {
    const now = Date.now()
    // Evitar múltiples saltos muy rápidos
    
      console.log('🎮 Jump triggered!')
      sendMessage("Player", "TriggerJump")
      lastJumpTimeRef.current = now
    
  }

  // Configurar el micrófono
  const setupMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      micStreamRef.current = stream
      setMicPermission(true)

      let audioContext = audioContextRef.current
      if (audioContext === null) {
        audioContext = new AudioContext()
        audioContextRef.current = audioContext
      }

      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 256
      analyserRef.current = analyser

      const source = audioContext.createMediaStreamSource(stream)
      source.connect(analyser)

      monitorNoise()
    } catch (error) {
      console.error('Error accessing microphone:', error)
      setMicPermission(false)
    }
  }

  // Monitorear el nivel de ruido
  const monitorNoise = () => {
    if (!analyserRef.current) return

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)

    const checkNoise = () => {
      if (!analyserRef.current || !micActive) return

      analyserRef.current.getByteFrequencyData(dataArray)
      const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length
      console.log('Noise Level:', average)
      setNoiseLevel(Math.round(average))

      if (average > JUMP_THRESHOLD && isLoaded) {
        handleJump()
      }

      animationFrameRef.current = requestAnimationFrame(checkNoise)
    }

    checkNoise()
  }

  // Activar/desactivar micrófono
  const toggleMicrophone = async () => {
    if (!micActive) {
      await setupMicrophone()
      setMicActive(true)
    } else {
      // Detener el micrófono
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach(track => track.stop())
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      setMicActive(false)
      setNoiseLevel(0)
    }
  }

  // Limpiar al desmontar
  useEffect(() => {
    return () => {
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach(track => track.stop())
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      position: 'relative',
    }}>
      {/* Botón de regreso */}
      <button 
        onClick={() => navigate('/CNPWebsite/')} 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          zIndex: 1000,
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#333'}
      >
        ← Back
      </button>

      {/* Controles de Micrófono */}
      {isLoaded && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'flex-end',
        }}>
          {/* Botón de activar/desactivar micrófono */}
          <button
            onClick={toggleMicrophone}
            style={{
              padding: '10px 20px',
              backgroundColor: micActive ? '#4CAF50' : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = micActive ? '#45a049' : '#555'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = micActive ? '#4CAF50' : '#333'}
          >
            🎤 {micActive ? 'Mic ON' : 'Mic OFF'}
          </button>

          {/* Indicador de nivel de ruido */}
          {micActive && (
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '10px 15px',
              borderRadius: '5px',
              color: 'white',
              fontSize: '14px',
              minWidth: '150px',
            }}>
              <div style={{ marginBottom: '5px' }}>
                Noise Level: {noiseLevel}
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#333',
                borderRadius: '4px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${Math.min((noiseLevel / 100) * 100, 100)}%`,
                  height: '100%',
                  backgroundColor: noiseLevel > JUMP_THRESHOLD ? '#4CAF50' : '#2196F3',
                  transition: 'width 0.1s, background-color 0.3s',
                }} />
              </div>
              <div style={{ marginTop: '5px', fontSize: '12px', opacity: 0.8 }}>
                Threshold: {JUMP_THRESHOLD}
              </div>
            </div>
          )}

          {/* Mensaje de error de permisos */}
          {micPermission === false && (
            <div style={{
              backgroundColor: 'rgba(255, 59, 48, 0.9)',
              padding: '10px',
              borderRadius: '5px',
              color: 'white',
              fontSize: '12px',
              maxWidth: '200px',
            }}>
              ⚠️ Microphone access denied
            </div>
          )}
        </div>
      )}

      {/* Indicador de carga */}
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '18px',
          textAlign: 'center',
          zIndex: 999,
        }}>
          <div>Loading...</div>
          <div style={{ marginTop: '10px', fontSize: '24px' }}>
            {Math.round(loadingProgression * 100)}%
          </div>
        </div>
      )}

      {/* Unity Game Canvas */}
      <Unity 
        unityProvider={unityProvider} 
        style={{ 
          width: "100%", 
          height: "100%",
          maxWidth: "1920px",
          maxHeight: "1080px",
          visibility: isLoaded ? 'visible' : 'hidden',
        }} 
      />
    </div>
  )
}
