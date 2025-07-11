import React from 'react'
import Navbar from '../pages/Navbar'
import AllQuotes from './AllQuotes'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Home