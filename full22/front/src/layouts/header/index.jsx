import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss"

const Header = () => {
  return (
    <header>
        <section className='head'>
            <div className='container'>
                <div className='all'>
                    <a>Tasty</a>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/favorites">Favorites</Link>
                            </li>
                            <li>
                                <Link to="/add">Add</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='all2'>
                    <h1>Book a table for yourself at a time convenient for you</h1>
                    <button>Book a table</button>
                </div>
                <div className='all3'>
                    <input placeholder='Name'/>
                    <input placeholder='Phone' type='number'/>
                    <input placeholder='M/D/YYYY'/>
                    <input placeholder='Time'/>
                    <button>Book  a table</button>
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header