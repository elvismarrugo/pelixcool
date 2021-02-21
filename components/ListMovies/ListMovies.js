import { Image, Grid } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";

export default function ListMovies(props) {
  const { movies } = props;

  return (
    <div className="list-movies__movie">
      <Grid>
        <Grid.Row columns={5}>
          {map
            (movies.Search,(movie) => (
              <Movie key={movie.imdbID} movie={movie}/>)
            )
          }
        </Grid.Row>
      </Grid>
    </div>
  )
}
function Movie(props) {
  const { movie } = props;

  return (
    <Grid.Column className="list-movies__movie">
          <div className="list-movies__movie-poster">
            <Image src={movie.Poster} alt={movie.Title} />
          </div>
          <h2>{movie.Title}</h2>
    </Grid.Column>
  );
}