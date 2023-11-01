function MovieCard({movie}){ //Destructuring props using object destructuring
    return(
        <>
        <div className="movie"> 
            <div><p>{movie.Year}</p></div>
            <div><img src={movie.Poster !== 'N/A' ? movie.Poster:'https://via.placeholder.com/400'} className="posterImage"></img></div>
            <div><span>{movie.Type}</span><h3>{movie.Title}</h3></div>
        </div>
        
        </>
    )
}
export default MovieCard;





