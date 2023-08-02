import { Grid } from "@mui/material";
import { Movie } from "../data/types";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <Grid container spacing={2} columns={16}>
      {movies.map((movie) => {
        return (
          <Grid
            xs={8}
            key={movie.imdbID}
            item={true}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MovieCard movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
};
