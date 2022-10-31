import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Lp from './Lp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
