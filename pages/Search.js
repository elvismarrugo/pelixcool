import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import { size } from 'loadash';
import BasicLayout from '../layouts/BasicLayout'
import {searchMoviesApi} from '../api/movie';
import ListMovies from '../components/ListMovies'

export default function Search(title) {
  const [movies, setMovies] = useState(null);
  // const { query } = useRouter();

  useEffect(() => {
    document.getElementById("search-movie").focus();
  }, []);

  // const url = `http://www.omdbapi.com/?apikey=8f82567b&s=${title}`;

  useEffect(() => {
    (async () => {
      if (size(`http://www.omdbapi.com/?apikey=8f82567b&s=${title}`) > 0) {
        const response = await searchMoviesApi(`http://www.omdbapi.com/?apikey=8f82567b&s=${title}`);
        if (size(response) > 0) setMovies(response);
        else setMovies([]);
      } else {
        setMovies([]);
      }
    })();
  }, [query]);


  return (
    <BasicLayout className="search">
      {!movies && <Loader active>Buscando peliculas</Loader>}
      {movies && size(movies) === 0 && (
        <div>
          <h3>No se han encontrado peliculas</h3>
        </div>
      )}
      {size(movies) > 0 && <ListMovies movies={movies} />}
  </BasicLayout>
  )
}
