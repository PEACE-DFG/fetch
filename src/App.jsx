import React from 'react'
import Index from './pages/Index'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Products from './pages/Products'
import Blogg from './pages/Blogg'
import {Route,Routes} from 'react-router-dom'
import NavBar from './components/includes/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Registers from './pages/Registers'
import './App.css'
import SingleProducts from './pages/SingleProducts'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Register' element={<Registers/>}></Route>
      <Route path='/Blog' element={<  Blogg/>}></Route>
    <Route path="/details/:productId" element={<SingleProducts />} />
     
      </Routes>
    
    </div>
  )
}

export default App