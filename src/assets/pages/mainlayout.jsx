import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'

function Mainlayout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            
        </>
    )
}

export default Mainlayout