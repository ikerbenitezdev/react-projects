function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  )
}
function NoMoviesResults () {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  )
}

export function Movies ({ movies }) {
    // console.log(movies);
    const hasMovies = movies?.length > 0
    return (
    hasMovies ? 
        <ListOfMovies movies={movies} /> : <NoMoviesResults />
)
  
}