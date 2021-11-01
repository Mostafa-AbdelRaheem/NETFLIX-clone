import React,{useEffect, useState} from 'react';
import axios from '../axios';
import "../style/Row.css"

const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    console.log("this is the request from API",fetchUrl)

    useEffect(() => {

        async function fetchData(){

            const request = await axios.get(fetchUrl);
            // console.log("this is the request from API",request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
      }, [fetchUrl]);
    console.log("Movies",movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie)=>{
                    return (
                    <img 
                        className="rowPoster" 
                        src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt={movie.name}
                    />
                    )
                })}
            </div>
        </div>
    );

}
 
export default Row;
