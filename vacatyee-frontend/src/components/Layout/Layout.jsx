import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout({children}) {
  return (
    <div
    >
        <Navbar />
        <div className="content flex-col justify-center items-center mb-10">
            <div className="w-full px-4 py-5">
                <div className='flex border border-red-600 justify-center items-center mx-4'>
                    {children}
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Layout