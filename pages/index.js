import { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import BasicLayout from '../layouts/BasicLayout'
import { getMoviesApi } from '../api/movie';
import ListMovies from '../components/ListMovies'

export default function Home() {
  const [movies, setMovies] = useState(null);

    useEffect(() => {
    (async () => {
      const response = await getMoviesApi();
      if (size(response) > 0) setMovies(response);
      else setMovies([]);
    })();
  }, []);

  return (
    <BasicLayout className="home">
      {!movies && <Loader active>Cargando juegos</Loader>}
      {movies && size(movies) === 0 && (
        <div>
          <h3>No hay juegos</h3>
        </div>
      )}
      {size(movies) > 0 && <ListMovies movies={movies} />}
    </BasicLayout>
  );
}