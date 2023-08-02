import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Movie } from "../data/types";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const { Poster, Title, Year, imdbID } = movie;

  const handleClick = () => {
    navigate(`/details/${imdbID}`);
  };

  return (
    <Card sx={{ width: 500, height: 600 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          sx={{
            maxHeight: 400,
            objectPosition: "center",
            objectFit: "contain",
          }}
          image={Poster}
          alt={Title}
        />
        <CardContent>
          {/* <Link to={`/details/${imdbID}`} style={{color:"black!important"}}>Go to details page</Link> */}
          <Typography gutterBottom variant="h6" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
