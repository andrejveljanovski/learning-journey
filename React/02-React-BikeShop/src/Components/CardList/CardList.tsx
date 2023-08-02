import { Grid } from "@mui/material";
import { ProductDetail } from "../../App";
import { CardComponent } from "../Card/Card";

export const CardList = ({
  bikes,
  filter,
}: {
  bikes: ProductDetail[];
  filter: ProductDetail[];
}) => {
  const displayBikes = filter.length > 0 ? filter : bikes;

  return (
    <Grid
      container
      spacing={4}
      columns={12}
      style={{ width: "85%", padding: "1rem" }}
    >
      {displayBikes.map((bike) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            key={`${bike.name}+${bike.price}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CardComponent bike={bike} />
          </Grid>
        );
      })}
    </Grid>
  );
};
