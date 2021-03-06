import React,{useContext,useState,useEffect,useRef} from 'react';
import {useSpring,animated} from 'react-spring';
import { MovieDataContext } from './Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp,faThumbsDown,faPlus } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Video from './Video';
import "../styles/description.css"

export const MovieURLContext=React.createContext()

const Description = () => {
    const moviesInfo =useContext(MovieDataContext);
    const [movieData,setMovieData]=useState([]);
    const [movieStatus,setMovieStatus]=useState(false);
    const [trailerUrl,setTrailerUrl] = useState("");


// for video
const[showVideo,setShowVideo]=useState(false)

const handlePLay=()=>{
    setShowVideo(prev=>!prev);
        movieTrailer(movieData.name || movieData.original_name || movieData.title )
        .then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch((error)=>console.log(error));

}

    useEffect(() => {
        setMovieData(moviesInfo.movieInfo)
        setMovieStatus(moviesInfo.descriptionStatus)
      }, [moviesInfo]);
     
      
    const handleClick=()=>{
        setMovieStatus(false);
    }

    return (
        
        <div >
            {movieStatus&&
                <div className="descriptionContainer">
                    <div className="descriptionPosterContainer">
                        <img  className="descriptionPoster" src={`http://image.tmdb.org/t/p/original${movieData.backdrop_path}`} />
                    <div className="posterContainerbannerBottom" ></div>
                    </div>
                    <img className="close" onClick={()=>handleClick()} src="./images/icons/close.png"/>
                    <div className="descriptionContextContainer">
                        <h2 className="descriptionTitle">{movieData.name || movieData.original_name || movieData.title}</h2>
                        <div className="descriptionButtons">
                            <i  className="descriptionPlayButton" onClick={()=>handlePLay()}>
                                <img src="./images/icons/play.png"/>
                                <p>play Trailer</p>
                            </i>
                            <i className="plusContainer">
                            <FontAwesomeIcon className="plus" icon={faPlus} size="lg"/>
                            </i>
                            <i className="thumbUpContainer">
                            <FontAwesomeIcon className="thumbUp" icon={faThumbsUp}/>
                            </i>
                            <i className="thumbDownContainer">
                            <FontAwesomeIcon className="thumbDown" icon={faThumbsDown}/>
                            </i>           
                        </div>
                        <p className="descriptionOverview">{movieData?.overview}</p> 
                    </div>
                        <Video trailerUrl={trailerUrl} showVideo={showVideo} setShowVideo={setShowVideo}  />
                </div>
            }
    </div>
    );

}
 
export default Description;