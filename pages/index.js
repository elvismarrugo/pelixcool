import { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import BasicLayout from '../layouts/BasicLayout'
import { getMoviesApi } from '../api/movie';
import ListMovies from '../components/ListMovies'
// import Pagination from "../components/Pagination";
import Seo from "../components/Seo";

const limitPerPage = 5;

export default function Home() {
  const [movies, setMovies] = useState(null);
  // const pagina = movies.pagina ? Number(movies.pagina) : 1
  
  // const [totalMovies, setTotalMovies] = useState(null);

  // const getStartItem = () => {
  //   const currentPages = parseInt(response.page);
  //   if (!response.page || currentPages === 1) return 0;
  //   else return currentPages * limitPerPage - limitPerPage;
  // };
  
  // console.log(getStartItem)

  useEffect(() => {
    (async () => {
      const response = await getMoviesApi();
      if (size(response) > 0) setMovies(response);
      else setMovies([]);
    })();
  }, []);
  console.log(movies)

  // useEffect(() => {
  //   (async () => {
  //     const response = await getTotalMoviesApi();
  //     setTotalMovies(response)
  //   })();
  // }, [movies]);

  return (
    <BasicLayout className="home">
    <Seo />
    {!movies && <Loader active>Cargando Peliculas</Loader>}
    {movies && size(movies) === 0 && (
      <div>
        <h3>No hay Peliculas</h3>
      </div>
    )}
    {size(movies) > 0 &&
      <ListMovies movies={movies} />
    }
    {/* {totalMovies ? (
      <Pagination
        totalMovies={totalMovies}
        page={response.page ? parseInt(response.page) : 1}
        limitPerPage={limitPerPage}
      />
      ) : null
    } */}
    </BasicLayout>
  );
}