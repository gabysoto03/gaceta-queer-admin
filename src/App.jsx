import { Routes, Route } from 'react-router-dom'
import Login from './modules/login/pages/Login'
import Gaceta from './modules/upload_gaceta/pages/Gaceta'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gaceta" element={<Gaceta />} />
    </Routes>
  )
}

export default App
