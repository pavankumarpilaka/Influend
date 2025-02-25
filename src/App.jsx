import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointments from './pages/Appointments'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-appointments' element={<Myappointments/>} />
        <Route path='/appointement/:docId' element={<Appointments/>} />
      </Routes>
    </div>
  )
}

export default App