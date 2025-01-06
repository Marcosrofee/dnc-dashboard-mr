import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/" element={<>CADASTRO</>} />
        <Route path="/" element={<>HOME</>} />
        <Route path="/" element={<>LEADS</>} />
        <Route path="/" element={<>PERFIL</>} />
      </Routes>
    </Router>
  )
}

export default App
