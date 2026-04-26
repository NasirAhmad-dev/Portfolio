import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contacts from './pages/Contacts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App