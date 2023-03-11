import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../sass/main.scss'
import Footer from './common/Footer'
import Under from './common/Under'
import Email from './views/email/Email'
import Hero from './views/hero/Hero'
import Movies from './views/movies/Movies'
import Services from './views/services/Services'
import Soon from './views/soon/Soon'
function Home() {



  return (
    <div className='home'>
        <Hero/>
        <Soon/>
        <Services/>
        <Movies/>
       <Email/>
       <Footer/>
       <Under/>
    </div>
  )
}

export default Home