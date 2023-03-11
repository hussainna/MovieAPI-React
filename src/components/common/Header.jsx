import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../data/Data'
import './common.scss'
function Header() {
  return (
    <header>
        <div className="container">
            <div className="log">
                <img src="./readme-images/project-logo.png" alt="" />
            </div>
            <nav>
                <ul>
                    {navData.map((item,idx)=>(
                        <li key={idx}>
                            <Link to='#'>{item.link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="forms">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div className="language">
            <i class="fa-solid fa-globe"></i>
            <label>EN</label>
            </div>
            <button>sign in</button>
            </div>
        </div>
    </header>
  )
}

export default Header