import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './movie.scss'
import { BiTime } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
function Movies() {


    const api_url='https://api.themoviedb.org/3/'
    const api_img='https://image.tmdb.org/t/p/w500/'
    const api_search='https://api.themoviedb.org/3/search/movie?api_key=129dc2837611e23a43d276078f46c7d9&query'
    const api_key='129dc2837611e23a43d276078f46c7d9'
  
  
    const [MovieAPI,setMovie]=useState([]);
  
    const fetchMovie=async ()=>{
      const {data:{results}}=await axios.get(`${api_url}discover/movie`,{
        params:{
          api_key:api_key
        }
      })
      setMovie(results)
    }
  
    useEffect(()=>{
      fetchMovie()
      console.log('move api',MovieAPI)
    },[])
  
  
    

  return (
    <div className='movies'>
        
        <div className="container">
            <div className="top">
                <label className='yellow'>ONLINE STREAMING</label>
                <h2>Top Rated Movies</h2>

            </div>
            <div className="row">
                <div className="item-desc"><h4>MOVIES</h4></div>
                <div className="item-desc"><h4>TV SHOWS</h4></div>
                <div className="item-desc"><h4>DOCUMENTARY</h4></div>
                <div className="item-desc"><h4>SPORTS</h4></div>
            </div>

            <div className="row-movies">
                {MovieAPI.map((item)=>(
                    <div className="movie" key={item.id}>
                        <img src={`${api_img}${item.poster_path}`} alt="" />
                        <div className="title">
                            <h4>{item.title}</h4>
                            <label className="yellow">{item.release_date}</label>
                        </div>
                        <div className="footer">
                            <label className='hd'>4K</label>
                            <div className="info">
                                <label>
                                    <i><BiTime/></i>
                                    127 min
                                </label>
                                <label>
                                    <i><AiFillStar/></i>
                                    {item.vote_average}
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

export default Movies