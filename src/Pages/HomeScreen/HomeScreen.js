import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/Nav/Nav'
import requests from '../../API/requests'
import {Row} from '../../Components/Row/Row'
export const HomeScreen = () => {
  return (
    <div className='homeScreen'> 
    {/* //navbar */}

    <Nav/>

    {/* banner */}
    <Banner/>

    {/* row */}

    <Row 
    title='NETFLIX ORIGINALS'
    fetchUrl={requests.NetflixOriginals}
    isLarge={true}
      />

    
    {/* row */}

    
    <Row   title='Trending Now' fetchUrl={requests.Trending}  />
    <Row   title='Top Rated' fetchUrl={requests.TopRated}  />
    <Row   title='Action Movies' fetchUrl={requests.ActioMovies}  />
    <Row   title='Comedy Movies' fetchUrl={requests.ComedyMovies}  />
    <Row   title='Horror Movies' fetchUrl={requests.HorrorMovies}  />
    <Row   title='Romantic Movies' fetchUrl={requests.RomanceMovies}  />
    <Row   title='Documentaries' fetchUrl={requests.Documentaries}  />

    
        


    </div>
  )
}
