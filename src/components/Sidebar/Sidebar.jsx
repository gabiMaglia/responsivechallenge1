import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div>
        <nav id='sidebar' className='navbar bg-light'>
                <h1 className='navbar-brand'><span>Dev</span>challenge.io</h1>
                <div className="nav-item">
                    <ul className='navbar-nav'>
                        <li className='nav-item' >
                            <a href="#" className='nav-link'>Colors</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Typography</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Spaces</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link active'>Buttons</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Inputs</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Grid</a>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
  )
}

export default Sidebar
