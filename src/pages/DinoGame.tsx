import React, { useEffect, useRef, useState } from 'react'
import OverlayMenu from './overlayMenu'

interface GameObject {
  x: number
  y: number
  width: number
  height: number
}

export default function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [micPermission, setMicPermission] = useState<boolean | null>(null)
  const [noiseLevel, setNoiseLevel] = useState(0)

  // Game state refs
  const playerRef = useRef<GameObject>({ x: 50, y: 200, width: 40, height: 40 })
  const velocityRef = useRef(0)
  const obstaclesRef = useRef<GameObject[]>([])
  const scoreRef = useRef(0)
  const gameLoopRef = useRef<number>()
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const micStreamRef = useRef<MediaStream | null>(null)

  // Game constants
  const GRAVITY = 0.6
  const JUMP_STRENGTH = -12
  const GROUND_Y = 200
  const OBSTACLE_SPEED = 5
  const OBSTACLE_SPAWN_RATE = 100
  const JUMP_THRESHOLD = 30 // Noise threshold to trigger jump


  useEffect(() => {
    if (gameStarted && !gameOver) {
      setupMicrophone()
      startGameLoop()
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach(track => track.stop())
      }
      if (audioContextRef.current) {
        //audioContextRef.current.close()
      }
    }
  }, [gameStarted, gameOver])

  const setupMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      micStreamRef.current = stream
      setMicPermission(true)

      let audioContext = audioContextRef.current;

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

  const monitorNoise = () => {
    if (!analyserRef.current) return

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)

    const checkNoise = () => {
      if (!analyserRef.current || gameOver) return

      analyserRef.current.getByteFrequencyData(dataArray)
      const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length
      
      setNoiseLevel(Math.round(average))

      if (average > JUMP_THRESHOLD && playerRef.current.y === GROUND_Y) {
        jump()
      }

      requestAnimationFrame(checkNoise)
    }

    checkNoise()
  }

  const jump = () => {
    if (playerRef.current.y === GROUND_Y) {
      velocityRef.current = JUMP_STRENGTH
    }
  }

  const startGameLoop = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frameCount = 0

    const gameLoop = () => {
      if (gameOver) return

      // Clear canvas
      ctx.fillStyle = '#f0f0f0'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update player physics
      velocityRef.current += GRAVITY
      playerRef.current.y += velocityRef.current

      // Keep player on ground
      if (playerRef.current.y > GROUND_Y) {
        playerRef.current.y = GROUND_Y
        velocityRef.current = 0
      }

      // Draw ground line
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, GROUND_Y + playerRef.current.height)
      ctx.lineTo(canvas.width, GROUND_Y + playerRef.current.height)
      ctx.stroke()

      // Draw player (dinosaur - green square)
      ctx.fillStyle = '#00ff00'
      ctx.fillRect(
        playerRef.current.x,
        playerRef.current.y,
        playerRef.current.width,
        playerRef.current.height
      )

      // Spawn obstacles
      frameCount++
      if (frameCount % OBSTACLE_SPAWN_RATE === 0) {
        const height = 30 + Math.random() * 30
        obstaclesRef.current.push({
          x: canvas.width,
          y: GROUND_Y + playerRef.current.height - height,
          width: 20,
          height: height
        })
      }

      // Update and draw obstacles (cacti - red squares)
      obstaclesRef.current = obstaclesRef.current.filter(obstacle => {
        obstacle.x -= OBSTACLE_SPEED

        // Draw obstacle
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)

        // Check collision
        if (
          playerRef.current.x < obstacle.x + obstacle.width &&
          playerRef.current.x + playerRef.current.width > obstacle.x &&
          playerRef.current.y < obstacle.y + obstacle.height &&
          playerRef.current.y + playerRef.current.height > obstacle.y
        ) {
          setGameOver(true)
          return false
        }

        // Remove off-screen obstacles
        if (obstacle.x + obstacle.width < 0) {
          scoreRef.current += 1
          setScore(scoreRef.current)
          return false
        }

        return true
      })

      // Draw score
      ctx.fillStyle = '#333'
      ctx.font = '24px Arial'
      ctx.fillText(`Score: ${scoreRef.current}`, 10, 30)

      // Draw noise level indicator
      ctx.fillStyle = noiseLevel > JUMP_THRESHOLD ? '#00ff00' : '#ff0000'
      ctx.fillRect(10, 50, noiseLevel * 2, 10)
      ctx.fillStyle = '#333'
      ctx.fillText(`Noise: ${noiseLevel}`, 10, 80)

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoop()
  }

  const handleStart = () => {
    setGameStarted(true)
    setGameOver(false)
    setScore(0)
    scoreRef.current = 0
    playerRef.current = { x: 50, y: GROUND_Y, width: 40, height: 40 }
    velocityRef.current = 0
    obstaclesRef.current = []
  }

  const handleRestart = () => {
    setGameOver(false)
    setScore(0)
    scoreRef.current = 0
    playerRef.current = { x: 50, y: GROUND_Y, width: 40, height: 40 }
    velocityRef.current = 0
    obstaclesRef.current = []
    startGameLoop()
  }

  return (
    <div style={styles.container}>
      <OverlayMenu />
      
      <div style={styles.content}>
        <h1 style={styles.title}>🦖 Dino Runner - Control por Micrófono</h1>
        
        {!gameStarted ? (
          <div style={styles.startScreen}>
            <p style={styles.instructions}>
              ¡Haz ruido para saltar y evitar los obstáculos!
            </p>
            <p style={styles.instructions}>
              Cuadrado Verde = Dinosaurio | Cuadrados Rojos = Obstáculos
            </p>
            <button onClick={handleStart} style={styles.button}>
              Iniciar Juego
            </button>
          </div>
        ) : (
          <>
            {micPermission === false && (
              <div style={styles.warning}>
                ⚠️ No se pudo acceder al micrófono. Por favor, permite el acceso.
              </div>
            )}
            
            <canvas
              ref={canvasRef}
              width={800}
              height={300}
              style={styles.canvas}
            />

            {gameOver && (
              <div style={styles.gameOverScreen}>
                <h2 style={styles.gameOverText}>¡Game Over!</h2>
                <p style={styles.finalScore}>Puntuación Final: {score}</p>
                <button onClick={handleRestart} style={styles.button}>
                  Jugar de Nuevo
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '20px',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    textAlign: 'center',
  },
  startScreen: {
    textAlign: 'center',
    padding: '40px',
  },
  instructions: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: '#00ff00',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  },
  canvas: {
    border: '3px solid #00ff00',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
    marginTop: '20px',
  },
  gameOverScreen: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '3px solid #ff0000',
  },
  gameOverText: {
    fontSize: '3rem',
    color: '#ff0000',
    marginBottom: '20px',
  },
  finalScore: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  warning: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '1.1rem',
  },
}
