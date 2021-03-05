/*   
import React from "react";
import ReactPlayer from "react-player/lazy";
import moment from "moment";
import "moment/locale/es";
import CarouselScreenshots from "../CarouselScreenshots";

export default function InfoMovie(props) {
  const { movie } = props;

  return (
    <div className="info-movie">
      <ReactPlayer
        className="info-movie__video"
        url={movie.video}
        controls={true}
      />
      <CarouselScreenshots title={movie.title} screenshots={movie.screenshots} />
      <div className="info-movie__content">
        <div dangerouslySetInnerHTML={{ __html: movie.summary }} />

        <div className="info-movie__content-date">
          <h4>Fecha de lanzamiento:</h4>
          <p>{moment(movie.releaseDate).format("LL")}</p>
        </div>
      </div>
    </div>
  );
} */