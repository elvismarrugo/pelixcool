import React, { useState, useEffect } from "react";
import { Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router'
import { size } from "lodash";
import BasicLayout from '../layouts/BasicLayout'
import { searchMoviesApi } from '../api/movie'
import ListMovies from '../components/ListMovies'

export default function search() {

  const [movies, setMovies] = useState(null);
  const { query } = useRouter();


  useEffect(() => {
    document.getElementById('search-movie').focus();
  }, []);

  useEffect(() => {
    (async () => {
      if (size(query.query) > 0) {
        const response = await searchMoviesApi(query.query);
        if (size(response) > 0) setMovies(response);
        else setMovies([]);
      } else {
        setMovies([]);
      }
    })()
  }, [query]);

  return (
    <BasicLayout className="search">
      {!movies && <Loader active>Buscando Peliculas</Loader>}
      {movies && size(movies) === 0 && (
        <div>
          <h3>No se han encontrado peliculas</h3>
        </div>
      )}
      {size(movies) > 0 && <ListMovies movies={movies} />}
    </BasicLayout>
  )
}