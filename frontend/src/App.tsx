import './styles/App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import Auth from './pages/Auth'
import { getCookie } from 'cookies-next';
function App() {
  let isLoggedIn = false;

  const token = getCookie('code-snippets-token');

  if (token) {
    isLoggedIn = true;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/auth" element={isLoggedIn ? <Navigate to="/" /> : <Auth isSignup={true} />} />

      </Routes>      
    </>
  )
}

export default App
