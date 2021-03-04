import React from "react";
import { Grid, Image } from "semantic-ui-react";
// import { size } from "lodash";
// import classNames from "classnames";
// import useAuth from "../../../hooks/useAuth";
// import useCart from "../../../hooks/useCart";
// import {
//   isFavoriteApi,
//   addFavoriteApi,
//   deleteFavoriteApi,
// } from "../../../api/favorite";

export default function HeaderMovie(props) {
  const { movie } = props;
  console.log(movie)
  // const { poster, title } = movie;

  // const  movie   = props;
  // console.log(movie)

  return (
    <Grid className="header-movie">
      <Grid.Column mobile={16} tablet={6} computer={5}>
        <Image src={Poster} alt={Title} fluid />
      </Grid.Column>
    </Grid>
  );
}