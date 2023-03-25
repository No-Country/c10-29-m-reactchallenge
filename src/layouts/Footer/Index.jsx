import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import './Index.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className="logo-footer">
            <h1>ByPass</h1>
        </div>
        <div className="social">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
            <span><FaTwitter /></span>
        </div> 
        <div className="copyright">
            {/* copyright     */}
            <p>© ByPass - 2023</p>
        </div>       
    </footer>
  )
}

export default Footer