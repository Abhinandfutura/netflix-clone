import React, { useEffect, useState } from "react";
import instance from "../../API/axios";
import requests from "../../API/requests";
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.NetflixOriginals);
      console.log("data", request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };

    fetchData();
  }, []);

  const truncate=(string,n)=>{

    return string?.length >n ? (string.substr(0,n-1) + "...") :string


  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview,150)}
        </h1>
      </div>

      <div className="banner__fadeButton">

      </div>
      {/* Banner */}
    </header>
  );
}

export default Banner;
