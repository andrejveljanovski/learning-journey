import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Movie } from "../data/types";
import { useParams } from "react-router-dom";

const IMDB_URL = `${import.meta.env.VITE_IMDB_API_BASE_URL}/?apikey=${
  import.meta.env.VITE_IMDB_API_KEY
}`;

export const Details = (): JSX.Element | null => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(IMDB_URL + `&i=${id}`)
      .then((res) => res.json())
      .then((data: Movie) => setMovie(data));
  }, [id]);

  // if (!movie) return null; //early return statement
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={movie?.Poster} />
      <Typography variant="h3" component="h3">
        {movie?.Title}
      </Typography>
      <Typography variant="h5" component="h5">
        {movie?.Year}
      </Typography>
    </Grid>
  );
};
