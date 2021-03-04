import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";
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
  const { Poster, Title } = movie.movie;

  return (
    <Grid className="header-movie">
      <Grid.Column mobile={16} tablet={6} computer={5}>
        <Image src={Poster} alt={Title} fluid />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <Info movie={movie}/>
      </Grid.Column>
    </Grid>
  );
}


function Info(props) {
  const { movie } = props;
  const { Title } = movie.movie;

  return (
      <div className="header-movie__title">
          {Title}
          <Icon
          name={isFavorite ? "heart" : "heart outline"}
          className={classNames({
            like: isFavorite,
          })}
          link
          onClick={isFavorite ? deleteFavorite : addFavorite}
        />
      </div>
  )
}