import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BasicLayout from "../layouts/BasicLayout";
import { getMovieByUrlApi } from "../api/movie";
import HeaderMovie from "../components/Movie/HeaderMovie";
// import TabsMovie from "../components/Movie/TabsMovie";
// import Seo from "../components/Seo";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { query } = useRouter();  
  
  useEffect(() => {
    (async () => {
      const response = await getMovieByUrlApi(query);
      setMovie(response);
    })();
  }, [query]);

  // if (!movie) return null;

  return (
    <BasicLayout className="movie">
      {/* <Seo title={movie.title} /> */}
      <HeaderMovie movie={movie} />
      {/* <TabsMovie movie={movie} /> */}
      <p>TabsGame</p>
      <h1>{query}</h1>
    </BasicLayout>
  );
}