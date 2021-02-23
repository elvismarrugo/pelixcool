import { Image, Grid } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";
import useWindowsSize from '../../hooks/useWindowsSize';

import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from "../../utils/breakpoint";

export default function ListMovies(props) {
  const { movies } = props;
  const { width } = useWindowsSize();
  
  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpLg:
        return 5;
      case width > breakpointUpMd:
        return 3;
      case width > breakpointUpSm:
        return 2;
      default:
        return 1;
    }
  };


  return (
    <div className="list-movies">
      <Grid>
        <Grid.Row columns={getColumnsRender()}>
          {map(movies.Search, (movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}
function Movie(props) {
  const { movie } = props;

  return (
    <Grid.Column className="list-movies__movie">
      <Link href={`/${movie.imdbID}`}>
        <a>
          <div className="list-movies__movie-poster">
            <Image src={movie.Poster} alt={movie.Title} />
          </div>
          <h2>{movie.Title}</h2>
        </a>
      </Link>
    </Grid.Column>
  );
}