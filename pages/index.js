import { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import BasicLayout from '../layouts/BasicLayout'
import Movies from '../components/Movies/Movies'
import { getMoviesApi } from '../api/movie';
import ListMovies from '../components/ListMovies'

export default function Home() {
  const [movies, setMovies] = useState(null);
  
  useEffect(() => {
    (async () => {
      const response = await getMoviesApi("batman");
      if (size(response) > 0) setMovies(response);
      else setMovies([]);
    })();
  }, []);
  return (
    <BasicLayout className="home">
            {/* {movies.map((movies) => {
              return (
                <div className="peliculas" key={movies.imdbID}>
                  <Movies {...movies} />
                </div>
              );
            })} */}
            {!movies && <Loader active>Cargando juegos</Loader>}
      {movies && size(movies) === 0 && (
        <div>
          <h3>No hay juegos</h3>
        </div>
      )}
  {/* {size(movies) > 0 && <ListGames movies={movies} />} */}      
      {size(movies) > 0 && <ListMovies movies={movies} />}
    </BasicLayout>
  );
}

// Home.getInitialProps = async ({query}) => {
//   const pagina = query.pagina ? Number(query.pagina) : 1
//   const url = `http://www.omdbapi.com/?apikey=8f82567b&s=Batman&page=${pagina}`;
//   const response = await fetch(url);
//   const result = await response.json();
//   return { movies: result.Search };
// };