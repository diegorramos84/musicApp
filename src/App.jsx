import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />}/>
          <Route path='/about' element={<Pages.About />}/>
          <Route path='/song/:name' element={<Pages.Song />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
