import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lobby from './pages/Lobby'
import Projects from './pages/Projects'
import Founders from './pages/Founders'
import Culture from './pages/Culture'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </Router>
  )
}
