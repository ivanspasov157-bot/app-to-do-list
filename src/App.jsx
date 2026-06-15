
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
    <Route path='/' element = {<Dashboard/>}/>
    <Route path='/home' element = {<HomePage/>}/>
    <Route path='/profile' element = {<ProfilePage/>}/>
    
    </Routes>
     </div>
  )
}

export default App
