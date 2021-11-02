import React,{useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from '../axios';
import "../style/Row.css"

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
      }, [fetchUrl]);

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            console.log("the name of the movie:",(movie?.name).trim())
            movieTrailer(movie.name || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=>console.log(error));
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie)=>{
                    return (
                    <img key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} 
                        src={`http://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie?.backdrop_path}`} 
                        alt={movie.name}
                    />
                    )
                })}
            </div>
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );

}
 
export default Row;
