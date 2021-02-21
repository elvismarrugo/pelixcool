export async function getMoviesApi(title) {
  try {
    const url = `http://www.omdbapi.com/?apikey=8f82567b&s=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function searchMoviesApi(title) {
  try {
    const url = `http://www.omdbapi.com/?apikey=8f82567b&s=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}