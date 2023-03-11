import React from 'react'
import './hero.scss'
import {AiFillCaretRight} from 'react-icons/ai'
import { BiTime } from 'react-icons/bi';
import { MdCalendarToday } from 'react-icons/md';

// import {HiCalendarDays} from 'react-icons/hi';
import Header from '../../common/Header'
function Hero() {
  return (
    <div>
        <Header/>
        <div className="hero">
          <div className="container">
            <h2 className='first'>Filmlane</h2>
            <h1 className="title">Unlimited <span className='yellow'>Movie</span>, TVs Shows, & More. </h1>

            <div className="info">
              <label className='old'>PG 18</label>
              <label className="hd">HD</label>
              <label className="desc">Romance, Drama</label>
              <label className='date'><span className='yellow'><i><MdCalendarToday/></i></span>2023</label>
              <label className='min'><span className='yellow'><i><BiTime/></i></span>128 min</label>
            </div>
            <button>
              <i><AiFillCaretRight/></i>
              WATCH NOW
            </button>
          </div>
        </div>
    </div>
  )
}

export default Hero