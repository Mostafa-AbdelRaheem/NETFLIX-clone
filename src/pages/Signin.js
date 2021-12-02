import React from 'react';
import Footer from './../components/Footer';
import '../styles/signin.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
const Signin = () => {
    return (
            <div className="singinContainer">
                <div className="logoContainer">
                    <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
                </div>
                <div className="signinLanding">
                    <div className="overlay"></div>
                </div>
                <div className="signinBox">
                    <h1>Sing In</h1>
                    <form className="signinForm">
                        <div className="data">
                            <input type="text"  placeholder="Email or phone number"/>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <button className="signinBtn" type="submit"><Link className="link" to="#">Sign In</Link></button>
                        <div className="signinCheckbox">
                            <div className="checkbox">
                                <input  type="checkbox" name="Remember me"/>
                                <label for="Remember me">Remember me</label>
                            </div>
                            <p className="needHelp"><a href="#">Need help?</a></p>
                        </div>
                    </form>
                    <div className="facebook">
                        <div className="facebookIcon">
                            <a href="#"><img src="/images/Facebook_icon.png"/></a>
                        </div>
                        <a href="#">Login with Facebook</a>
                    </div>
                    <p>New to Netflix?<a className="signup" href="#"> Sign up now.</a></p>                    
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></p>
                </div>
                <div className="footer">

                <Footer/>
                </div>

            </div>
    );
}
 
export default Signin;