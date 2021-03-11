import { BASE_URLAPI } from '../utils/constants';

export async function getMoviesApi() {
  try {
    // 'https://www.omdbapi.com/?apikey=8f82567b&plot=full&s=batman'
    // const pagina = movies.pagina ? Number(movies.pagina) : 1
    // const url = `${BASE_URLAPI}&plot=full&s=${"batman"}&page=${pagina}`;
    const url = `${BASE_URLAPI}&plot=full&s=${"batman"}`;
    const response = await fetch(url);
    const result = await response.json();
    const movies = result.Search
    return movies;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function searchMoviesApi(title) {
  try {
    // https://www.omdbapi.com/?apikey=8f82567b&s=batman
    const url = `${BASE_URLAPI}&s=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    const movies = result.Search
    return movies;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getMovieByUrlApi(title) {
  // console.log(`${title} getMovieByUrlApi`)
  try {
    // https://www.omdbapi.com/?apikey=8f82567b&s=batman

    const url = `${BASE_URLAPI}&i=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return {movie: result, totalMovies: result.Search.length+1 };
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getTotalMoviesApi(title) {
  try {
    const url = `${BASE_URLAPI}&s=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    const movie = result.Search.length+1;
    return movie;
  } catch (error) {
    console.log(error);
    return null;
  }
}