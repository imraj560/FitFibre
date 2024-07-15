import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Add from './pages/add/Add';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/add" element={<Add/>} />

      </Routes>

    </BrowserRouter>

  )
}

export default App

