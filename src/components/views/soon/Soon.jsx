import React from 'react'
import { Upcoming } from '../../data/Data'
import { BiTime } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import './soon.scss'
function Soon() {
  return (
    <div className='soon'>
        <div className="container">
            <div className="top">
            <div className="left">
                <label className="yellow">Online Streaming</label>
                <h2>Upcoming Movies</h2>
            </div>
            <div className="right">
                <button>Movies</button>
                <button>Tv Shows</button>
                <button>Anime</button>

            </div>
            </div>

            <div className="row">
                {Upcoming.map((item,idx)=>(
                    <div className="item" key={idx}>
                        <img src={item.img} alt="" />
                        <div className="title">
                           <h4>{item.name}</h4>
                           <label>2023</label>
                        </div>
                        <div className="footer">
                            <label className='hd'>HD</label>
                            <div className="info">
                                <label>
                                    <i><BiTime/></i>
                                    {item.min} min
                                </label>
                                <label>
                                    <i><AiFillStar/></i>
                                    {item.star}
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Soon