import { map } from "lodash";

export default function ListMovies(props) {
  const { movies } = props;

  return (
    <div className="list-movies">
      {map(movies.Search,(movie) => (
          <h3 key={movie.imdbID} >{movie.Title}</h3>)
        )
      }
    </div>
  )
}
