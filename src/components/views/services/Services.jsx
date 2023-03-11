import React from 'react'
import {MdLocalMovies} from 'react-icons/md'
import {BiCameraMovie} from 'react-icons/bi'
import './services.scss'

function Services() {
  return (
    <div className='services'>
        <div className="container">
            <div className="row">
                <div className="left">
                    <img src="./images/service-banner.jpg" alt="" />
                </div>
                <div className="right">
                    <label>our Services</label>
                    <h2>Download Your Shows Watch Offline.</h2>
                    <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour. </p>
                    <div className="item">
                        <i><MdLocalMovies/></i>
                        <div className="item-text">
                            <h4>Enjoy on Your TV.</h4>
                            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor. </p>
                        </div>
                    </div>
                    <div className="item">
                        <i><BiCameraMovie/></i>
                        <div className="item-text">
                            <h4>Watch Everywhere.</h4>
                            <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services