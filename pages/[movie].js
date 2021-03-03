import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout";
import { getMovieByUrlApi } from "../api/movie";
import HeaderMovie from '../components/Movie/HeaderMovie';

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { query } = useRouter();
  // const data = useRouter();
  // const { imdbID } = data.query
  
  useEffect(() => {
    (async () => {
      const response = await getMovieByUrlApi(query.movie);
      // console.log(`${response}`)
      setMovie(response);
    })();
  }, [movie]);

  if (!game) return null;

  return (
    <BasicLayout className="movie">
      <HeaderMovie movie={movie}/>
      <p>Tabs Movie</p>
    </BasicLayout>
  );
}