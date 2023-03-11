import React from 'react'
import './email.scss'
function Email() {
  return (
    <div className='email'>
        <div className="container">
            <div className="left">
                <h2>Trial start first 30 days.</h2>
                <p>Enter your email to create or restart your membership. </p>
            </div>
            <div className="right">
                <form>
                    <input type="text" placeholder='Enter Your Name' name="" id="" />
                    <button>Get Started</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Email