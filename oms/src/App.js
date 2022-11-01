import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Lp from './Header'
import Home from './Home'
import { AuthContextContainer } from './hooks/UseAuth'
import { ProtectedRoute } from './hooks/UseAuth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
        </AuthContextContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
