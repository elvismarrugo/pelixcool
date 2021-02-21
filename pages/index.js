import BasicLayout from '../layouts/BasicLayout'
import Movies from '../components/Movies/Movies'

export default function Home({ movies }) {
  return (
    <BasicLayout >
          {/* <h6>{JSON.stringify(movies)}</h6> */}
          {/* <img src={movies.Poster} alt='' /> */}
          {/* <h6>{`${movies.Title} - ${movies.Year}`}</h6>     */}
            {movies.map((movies) => {
              return (
                <div className="peliculas" key={movies.imdbID}>
                  {/* {`${movies.Title} - ${movies.Year}`} */}
                  <Movies {...movies} />
                </div>
              );
            })}
    </BasicLayout>
  );
}

Home.getInitialProps = async ({query}) => {
  const pagina = query.pagina ? Number(query.pagina) : 1
  const url = `http://www.omdbapi.com/?apikey=8f82567b&s=Batman&page=${pagina}`;
  const response = await fetch(url);
  const result = await response.json();
  return { movies: result.Search };
};