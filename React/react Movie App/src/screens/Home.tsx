import { Movie, MovieResponse } from "../data/types";
import { SearchBar } from "../components/SearchBar";
import { MovieList } from "../components/MovieList";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const QUERY_INITIAL_STATE = "Lord of the rings"; //magic string
const IMDB_URL = `${import.meta.env.VITE_IMDB_API_BASE_URL}/?apikey=${
  import.meta.env.VITE_IMDB_API_KEY
}`;

export const Home = () => {
  const [query, setQuery] = useState<string | null>(QUERY_INITIAL_STATE);
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [movies, setMovies] = useState<Movie[] | null>(null); //or undefined

  useEffect(() => {
    if (!query) {
      return setQuery(QUERY_INITIAL_STATE);
    }
    fetch(IMDB_URL + `&s=${query}`)
      .then((res) => res.json())
      .then((data: MovieResponse) => setMovies(data.Search));
  }, [query]);

  return (
    <>
      <SearchBar
        options={movies.map((movie) => movie.Title)}
        onChange={(value) => setQuery(value)}
      />
      <Box p={4} m={4}>
        <MovieList movies={movies} />
      </Box>
    </>
  );
};
