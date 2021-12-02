import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css'


const Navbar = () => {
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div className={`navbarContainer ${show &&"navbarContainerBlack"}`}>
            <div className="browseNavbar">
            <div className="leftSideNavbar">
                <div className="logoContainer">
                    <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
                </div>
            </div>
            <div className="RightSideNavbar">
                <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
                <Link className="KidesLink" to="#">Kides</Link>
                <div className="user">
                    <img className="userAvatar" src="./images/users/2.png" alt="userAvatar"/>
                </div>
            </div>
        </div>
        </div>
      );
}
 
export default Navbar;