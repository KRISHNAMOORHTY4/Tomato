import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './Order'
import Content from './Content'



function App() {

  return (
    <>
    <Routes>
      <Route path='/home' element={<Content/>}/>
      <Route path='/order/:food/:quantity' element={<Order />}/>
    </Routes>
    </>
    
  )
}

export default App