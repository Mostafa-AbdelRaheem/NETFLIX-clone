import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;