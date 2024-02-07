import React from 'react'
import { Link } from 'react-router-dom'
import Pagestyle from './Navbar.module.css'
// mport loginStyle from "./Login.module.css"


export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom mb-1">
        <div className="container-fluid">
            <Link className={`${Pagestyle.name}`} to=""> <span className='text-warning  font-monospace'>B</span>ox Office</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className='nav-link' to="">MOVIES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="about">TV SHOWS</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className='nav-link' to="parent">Parent</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className='nav-link' to="contacts">CONTACT</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
        <div className={Pagestyle.line}></div>
</div>
)
  
}


