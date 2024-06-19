import { useState } from 'react'
import './App.css'
import LoginPage from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Home'
import Inventory from './pages/Inventory'
import Order from './pages/Orders'
import Payments from './pages/Payments'
import Plan from './pages/Plan'
import Sustainability from './pages/Sustainability'
import News from './pages/News'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/order" element={<Order />} />
      <Route path="/remittances" element={<Payments />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/news" element={<News />} />
      <Route path="/planing" element={<Plan />} />
    </Routes>


    </>
  )
}

export default App
