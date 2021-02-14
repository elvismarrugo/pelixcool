import BasicLayout from '../layouts/BasicLayout'

export default function Home({ movies }) {
  
  return (
    <BasicLayout>
      <div>
        {/* <h6>{JSON.stringify(movies)}</h6> */}
        {/* <img src={movies.Poster} alt='' /> */}
        {/* <h6>{`${movies.Title} - ${movies.Year}`}</h6>     */}
        {
          movies.map((movie) => {
            return <div>{`${movie.Title} - ${movie.Year}`}</div>;
          })
        }
      </div>
    </BasicLayout>
  );
}

Home.getInitialProps = async ({query}) => {
  const pagina = query.pagina ? Number(query.pagina) : 1
  const res = await fetch(    
    `http://www.omdbapi.com/?apikey=8f82567b&s=Batman&page=${pagina}`    
  );
  const json = await res.json();  
  return { movies: json.Search };  
};