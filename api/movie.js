import { BASE_URLAPI } from '../utils/constants';

export async function getMoviesApi(title) {
  try {
    // 'https://www.omdbapi.com/?apikey=8f82567b&plot=full&s=batman'
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
  try {
    // https://www.omdbapi.com/?apikey=8f82567b&s=batman
    const url = `${BASE_URLAPI}&i=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    const movies = result.Search
    return movies;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// export async function getMovieByUrlApi(query) {
//   // const imdbID = query;
//   // console.log(query.movie)

//   try {
//     // const url = `https://www.omdbapi.com/?apikey=8f82567b&i=tt0372784`;
//     const url = `${BASE_URLAPI}&i=${query}`;
//     console.log(url)
//     const data = await fetch(url);
//     const movie = await data.json();
//     return {
//       movie,
//     }
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }