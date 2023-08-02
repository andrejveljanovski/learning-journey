import {
  Card as Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import styles from "./card.module.scss";
import { ProductDetail } from "../../App";

export const CardComponent = ({ bike }: { bike: ProductDetail }) => {
  return (
    <Card sx={{ width: 350 }} className={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={`src/Assets/BikesIMG/${bike.image}.png`}
        alt="bike"
      />
      <CardContent className={styles.cardContent}>
        <Typography
          sx={{ fontSize: 16, fontWeight: "bold" }}
          color="text.primary"
          gutterBottom
        >
          {bike.name}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.primary">
          {bike.price}$
        </Typography>
      </CardContent>
    </Card>
  );
};
