import React,{useState,useEffect} from 'react';
import axios from '../axios';
import requests from '../requests';
import '../style/Banner.css'

const Banner = () => {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length -1)
            ]);
            console.log("Random numbers",Math.floor(Math.random()* request.data.results.length -1))
            return request;
        }
        fetchData();
      }, []);

      function truncate(str,n){
          return str?.length>n ? str.substr(0,n-1)+ "..." : str;
      }


    return ( 
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
        
        > {/* background image */}
            <div className="bannerContent">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerButtons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>
                <p className="bannerOverview">{truncate(movie?.overview,150)}</p>
            </div>
            <div className="bannerBottom"/>
        </header>
    );
}
 
export default Banner;