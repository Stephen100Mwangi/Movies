import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

// Declare API Key
const API_URL = 'http://www.omdbapi.com?apikey=4dfe76fe';
const movie1 = {
    "Title": "Captain Marvel",
    "Year": "2019",
    "imdbID": "tt4154664",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
};

function MovieApp(){

    // useState
    const [movies,setMovies] = useState([]);

    //useState for search
    const [searchTerm,setSearchTerm] = useState('');
    //async - Asychronous meaning it takes some time to fetch the data.
    const searchMovie = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);

        // Get data 
        const data = await response.json();

        // Pass movie data
        setMovies(data.Search);

    }
    useEffect(() => {
        searchMovie("Jumanji");
    },[]);

    return(
        <>
           <h1>MoviePool.</h1>
      <div className='search'>
        {/* Value in the search field is currently Superman onChange event allows change every time user tries to type something */}
        {/* Let us dynamically change the value of the search using value user types i the field */}
        {/* e is the event */}
        {/* We set value of input as the search prompt */}
        <input placeholder='Search Movie' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
        <i className="fa-solid fa-magnifying-glass" onClick={()=>searchMovie(searchTerm)}></i>
      </div>


{/* Dynamic block of code */}
      {
        movies?.length > 0 ?(
            <div className="container">
                <div className="empty"><h2>Movies Found</h2></div>
                {movies.map(
                    (movie)=>
                    (<MovieCard movie={movie}></MovieCard>))}
            </div>
        ):(
            <div className="empty">
                <h2>No Movies found</h2>
            </div>
        )
      }
      <div className='container'>
        <MovieCard movie={movies}></MovieCard>
        
      </div>
        </>
    )
}
export default MovieApp;