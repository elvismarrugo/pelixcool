import BasicLayout from '../layouts/BasicLayout'

export default function Home({ movie }) {
  return (
    <BasicLayout>      
      <div>
        {/* <h6>{JSON.stringify(movie)}</h6> */}
        {/* <img src={movie.Poster} alt='' /> */}

        <h6>{`${movie.Title} - ${movie.Year}`}</h6>
        
      </div>
    </BasicLayout>
  );
}

Home.getInitialProps = async (query) => {  
  const res = await fetch(
    'http://www.omdbapi.com/?i=tt3896198&apikey=8f82567b'
  );
  const json = await res.json();
  return { movie: json};
};