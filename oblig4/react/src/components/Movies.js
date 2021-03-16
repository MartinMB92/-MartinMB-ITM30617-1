import { useState } from 'react';
import { getMovies } from '../utils/movieService';
import Movie from './Movie';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    const movie = await getMovies();
    setMovies(movie);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Show movies
      </button>
      {movies.map((movie, i) => (
        <Movie title={movie.title} actor={movie.actor} key={`mov-${i}`} />
      ))}
    </>
  );
};

export default Movies;
