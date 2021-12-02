import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import EmailForm from './EmailForm';

const Header = () => {
    return (
    <div >
        <div className="container">
            <div className="headerNavbar">
                <div className="logoContainer">
                    <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
                </div>
                <div className="selection">
                    <form className="formContainer">
                        <select className="language">
                            <option value="English">English</option>    
                            <option value="Arabic">Arabic</option>
                        </select>
                    </form>
                    <button className="SingInBtn"><Link className="link" to="/signin">Sing in</Link></button>
                </div>
            </div>
        
        </div>
        <div className="homeLanding">
            <div class="overlay"></div>
        <div className="container">
            <div class="text">
                <div class="content">
                    <h1 className="landingHeader">Unlimited movies, TV shows, and more.</h1>
                    <p className="landingText">Watch anywhere. Cancel anytime.</p>
                </div>
                <EmailForm/>
            </div>
        </div>
        <div className="landingBottom"></div>
        </div>
    </div>
    );
}
 
export default Header;