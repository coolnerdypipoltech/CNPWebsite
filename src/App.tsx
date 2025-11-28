import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Founders from './pages/Founders'
import DinoGame from './pages/DinoGame'
import Test from './pages/Test'
import Main from './Main'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/CNPWebsite" element={<Main />} />
        <Route path="/CNPWebsite/work" element={<Projects />} />
        <Route path="/CNPWebsite/founders" element={<Founders />} />
        <Route path="/CNPWebsite/dinogame" element={<DinoGame />} />
        <Route path="/CNPWebsite/test" element={<Test />} />
      </Routes>
    </Router>
  )
}
