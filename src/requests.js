const API_KEY = 'e88aea6c998dc03d9dc3d1b3bf5880d0' ;

const requests ={
    // fetchTrending:`trending/all/day?api_key=${API_KEY}  /trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?with_networks=213&api_key=${API_KEY}`,
    // fetchNetflixOriginals:`/discover/tv?with_networks=213&api_key=${API_KEY}&sort_by=release_date.desc&release_date.gte=2022-01-01`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28
// https://api.themoviedb.org/3/discover/tv?with_networks=213&api_key=e88aea6c998dc03d9dc3d1b3bf5880d0


// this link if you get you will find all the genre ids
// https://api.themoviedb.org/3/genre/movie/list?api_key=e88aea6c998dc03d9dc3d1b3bf5880d0&language=en-US


// "id": 12,
// "name": "Adventure"

// "id": 16,
// "name": "Animation"

// "id": 35,
// "name": "Comedy"

// "id": 80,
// "name": "Crime"

// "id": 99,
// "name": "Documentary"

// "id": 18,
// "name": "Drama"

// "id": 10751,
// "name": "Family"

// "id": 14,
// "name": "Fantasy"

// "id": 36,
// "name": "History"

// "id": 27,
// "name": "Horror"

// "id": 10402,
// "name": "Music"

// "id": 9648,
// "name": "Mystery"

// "id": 10749,
// "name": "Romance"

// "id": 878,
// "name": "Science Fiction"

// "id": 10770,
// "name": "TV Movie"

// "id": 53,
// "name": "Thriller"
