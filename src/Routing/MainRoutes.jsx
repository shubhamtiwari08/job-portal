import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';


function MainRoutes() {
  return (
    <div>
         <Routes>
    <Route path="/" element={<Dashboard/>}/>
    </Routes>
    </div>
  )
}

export default MainRoutes