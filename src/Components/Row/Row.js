import React, { useState ,useEffect} from 'react'
import './Row.css'
import instance  from '../../API/axios'
import './Row.css'
export const Row = ({title,fetchUrl, isLarge=false}) => {
  const[movies,setMovies]=useState([])

  const base_url='https://image.tmdb.org/t/p/original/'

  useEffect(() => {
  
    const fetchData=async()=>{


     const request= await instance.get(fetchUrl)
     setMovies(request.data.results)

     return request
    }
    fetchData()
  }, [fetchUrl])
  console.log("result",movies);
  
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">

        {
          movies.map((movie)=>{
            return(
           (  ( isLarge && movie.poster_path ) || (!isLarge && movie.backdrop_path))
             && (<img key={movie.id} 
               src={`${base_url}${ isLarge ? movie.poster_path : movie.backdrop_path} `} 
               className={`row__poster ${isLarge && "row__posterLarge"}`} />)
            )
          })
        }

          
            

      </div>
    </div>
  )
}
