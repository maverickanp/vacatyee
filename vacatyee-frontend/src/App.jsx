import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col min-h-screen justify-between'
    >
        <Navbar />
        <div className="content flex-col justify-center items-center mb-10">
            <div className="w-full px-4 py-5">
            <main className="flex-grow p-4">
                <div className='flex justify-center items-center mx-4'>
                    <Outlet/>
                </div>
            </main>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default App