import React from 'react'
import { FaFacebook } from "react-icons/fa";    
import "./index.scss"

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='all'>
                <div className='par'>
                    <p>Blog</p>
                    <p>Blog</p>
                    <p>Blog</p>
                </div>
                <div className='icons'>
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
                </div>
            </div>
            <span className='last'>©2018 All Rights Reserverd. This template is made with  by Colorlib</span>
        </div>
    </footer>
  )
}

export default Footer