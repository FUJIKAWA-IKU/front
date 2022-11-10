import React, { useState, useEffect } from "react";
import { Search } from "./Search";

// type Props = {
//   aa: Array<string>;
//   bb: string[];
// }

interface MovieObj {
  Title: string;
  Poster: string;
}

export const Toppage: React.FC = () => {
  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=e9c14898";

  const [movies, setMovies] = useState<Array<MovieObj>>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        console.log(jsonResponse.Search);
      });
  }, []);

  const searchFunction = (search: string) => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=e9c14898`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          console.log("結果", jsonResponse.Search);
        } else {
          setErrorMessage(jsonResponse.Error);
          console.log("エラー", errorMessage);
        }
      });
  };

  return (
    <>
      <Search searchFunc={searchFunction} />
      <div>
        {movies.map((movie) => (
          <>
            <p key={movie.Title}>{movie.Title}</p>
            <img src={movie.Poster} />
          </>
        ))}
      </div>
    </>
  );
};
