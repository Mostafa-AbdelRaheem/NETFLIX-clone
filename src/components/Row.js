import React,{useEffect, useState} from 'react';
import axios from '../axios';
import "../style/Row.css"

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies] = useState([]);
    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
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
                    <img key={movie.id}
                        className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} 
                        src={`http://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie?.backdrop_path}`} 
                        alt={movie.name}
                    />
                    )
                })}
            </div>
        </div>
    );

}
 
export default Row;
