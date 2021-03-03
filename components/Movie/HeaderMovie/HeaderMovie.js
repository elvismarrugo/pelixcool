import React from "react";
import { Grid } from "semantic-ui-react";
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
  // console.log(props)
  const { movie } = props;
  // const { Title } = movie;
  // console.log(Title)

  return (
    <Grid className="header-movie">
      <Grid.Column mobile={16} tablet={6} computer={5}>
      <p>Imagen</p>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        {/* <Info movie={movie} /> */}
        <p>movie={movie}</p>
      </Grid.Column>
    </Grid>
  );
}