import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout";
import { getMovieByUrlApi } from "../api/movie";
import HeaderMovie from '../components/Movie/HeaderMovie';

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getMovieByUrlApi(query.movie);
      setMovie(response);
    })();
  }, [query]);

  if (!movie) return null;

  return (
    <BasicLayout className="movie">
      <HeaderMovie movie={movie} />
    </BasicLayout>
  );
}