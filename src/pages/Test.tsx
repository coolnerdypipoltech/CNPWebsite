import React, { useState, useEffect, useRef } from 'react'

export default function Test() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [allTranscripts, setAllTranscripts] = useState<string[]>([])
  const [jumpDetected, setJumpDetected] = useState(false)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    // Inicializar el reconocimiento de voz
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    
    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported in this browser")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'es-ES'

    recognition.onresult = (event: any) => {
      let interimTranscript = ''
      let finalTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' '
        } else {
          interimTranscript += transcript
        }
      }

      // Actualizar el transcript actual
      setTranscript(interimTranscript || finalTranscript)

      // Si es final, agregarlo a la lista
      if (finalTranscript) {
        setAllTranscripts(prev => [...prev, finalTranscript.trim()])
        
        // Detectar "jump", "salta" o "saltar"
        const lowerTranscript = finalTranscript.toLowerCase()
        if (lowerTranscript.includes('jump') || lowerTranscript.includes('salta') || lowerTranscript.includes('saltar')) {
          setJumpDetected(true)
          setTimeout(() => setJumpDetected(false), 2000) // Volver a rojo después de 2 segundos
        }
      }
    }

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
    } else {
      try {
        recognitionRef.current?.start()
        setIsListening(true)
        setTranscript('')
      } catch (error) {
        console.error("Error starting recognition:", error)
      }
    }
  }

  const clearTranscripts = () => {
    setAllTranscripts([])
    setTranscript('')
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ marginBottom: '30px' }}>🎤 Voice Recognition Test</h1>

      {/* Botón de estado de listening */}
      <button
        onClick={toggleListening}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: isListening ? '#ff4444' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '20px',
          transition: 'all 0.3s',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
        }}
      >
        {isListening ? '🔴 Stop Listening' : '🎙️ Start Listening'}
      </button>

      {/* Botón indicador de Jump */}
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: jumpDetected ? '#00ff00' : '#ff0000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '30px',
          transition: 'background-color 0.3s',
          boxShadow: jumpDetected 
            ? '0 0 30px rgba(0,255,0,0.6)' 
            : '0 0 30px rgba(255,0,0,0.6)'
        }}
      >
        {jumpDetected ? '✅ JUMP!' : '⭕ NO JUMP'}
      </div>

      {/* Transcript en tiempo real */}
      <div style={{
        backgroundColor: '#2a2a2a',
        padding: '20px',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '600px',
        marginBottom: '20px',
        minHeight: '60px',
        border: '2px solid #444'
      }}>
        <h3 style={{ marginTop: 0, color: '#4CAF50' }}>Current:</h3>
        <p style={{ fontSize: '18px', minHeight: '30px', color: '#fff' }}>
          {transcript || <span style={{ color: '#666' }}>Waiting for speech...</span>}
        </p>
      </div>

      {/* Historial de transcripts */}
      <div style={{
        backgroundColor: '#2a2a2a',
        padding: '20px',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '600px',
        maxHeight: '300px',
        overflowY: 'auto',
        border: '2px solid #444'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ marginTop: 0, color: '#4CAF50' }}>History:</h3>
          <button
            onClick={clearTranscripts}
            style={{
              padding: '5px 15px',
              fontSize: '14px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear
          </button>
        </div>
        <div>
          {allTranscripts.length === 0 ? (
            <p style={{ color: '#666' }}>No transcripts yet...</p>
          ) : (
            allTranscripts.map((text, index) => (
              <div
                key={index}
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  backgroundColor: text.toLowerCase().includes('jump') || 
                                  text.toLowerCase().includes('salta') || 
                                  text.toLowerCase().includes('saltar')
                    ? 'rgba(0, 255, 0, 0.1)'
                    : '#333',
                  borderRadius: '5px',
                  borderLeft: text.toLowerCase().includes('jump') || 
                             text.toLowerCase().includes('salta') || 
                             text.toLowerCase().includes('saltar')
                    ? '4px solid #00ff00'
                    : '4px solid #666'
                }}
              >
                <span style={{ fontSize: '16px' }}>{text}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Instrucciones */}
      <div style={{
        marginTop: '30px',
        textAlign: 'center',
        color: '#999',
        fontSize: '14px'
      }}>
        <p>💡 Say "jump", "salta", or "saltar" to trigger the indicator</p>
        <p>🌐 Works best in Chrome/Edge</p>
      </div>
    </div>
  )
}
