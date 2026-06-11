
import './App.css'
import Navbar from"./components/navbar"
import Dashboard from './components/dashboard'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import {Routes, Route } from "react-router-dom"

function App() {
 

  return (
    <div className='flex'>
   
    <Navbar /> 
    <Routes>
     <Dashboard/>
    <HomePage/>
    <ProfilePage/>
    </Routes>
    </div>
  )
}

export default App
