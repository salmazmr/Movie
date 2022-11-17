class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=e9097ab391928dc8f27f651ce6864d10&language=en-US&page=1&include_adult=false&query=${keyword}`)

      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.results.length !==0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
export default DataSource;