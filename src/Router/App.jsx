import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeStoreContainer from '../Store/EmployeeStore'
import Home from "../Pages/Home"
import TeamList from "../Pages/TeamList"
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

function App() {
  return (
    <EmployeeStoreContainer>
      <Navbar/>
      <Header/>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/teamlist' element={<TeamList/>}/>
    </Routes>
    </EmployeeStoreContainer>
  )
}

export default App
