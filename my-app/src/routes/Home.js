import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  fetch("https://storageforstatejson.herokuapp.com/router/output")
    .then(function (response) {
      console.log(response);
      // response.json().then(function (data) {
      //   console.log("json data:", data);
      // });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoding(false);
  };
  useEffect(getMovie, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
