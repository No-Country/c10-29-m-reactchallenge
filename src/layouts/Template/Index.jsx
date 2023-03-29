import React from 'react'
import Footer from '../Footer/Index'
import Navbar from '../Navbar/Index'
import "./Index.css";

function Template({children}) {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <Footer  />
    </>
  )
}

export default Template