import React from 'react';
import Header from '../components/Header';
import Jumbotron from "../components/Jumbotron";
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

const Home = () => {
    return ( 
        <div>
        <Header/>
        <Jumbotron />
        <FAQs />
        <Footer/>
      </div>
     );
}
 
export default Home;