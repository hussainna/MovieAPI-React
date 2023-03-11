import React from 'react'
import './common.scss'
import {navData} from '../data/Data'
import { Link } from 'react-router-dom'

import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin} from 'react-icons/ai'



function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="top">
                <h2 className="logo">Filmlane</h2>
                <ul>
                    {navData.map((item,idx)=>(
                        <li key={idx}>
                            <Link to='#'>{item.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="middle"></div>
            <div className="bottom">
                <ul>
                    <li><Link>Faq</Link></li>
                    <li><Link>Help center</Link></li>
                    <li><Link>Terms of use</Link></li>
                    <li><Link>Privacy</Link></li>
                </ul>
                <div className="icons">
                    <i><BsFacebook/></i>
                    <i><AiOutlineTwitter/></i>
                    <i><AiOutlineInstagram/></i>
                    <i><AiFillLinkedin/></i>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer