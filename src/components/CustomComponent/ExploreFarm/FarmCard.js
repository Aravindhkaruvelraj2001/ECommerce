import { Grid, Typography } from "@mui/material";
import React from "react";
import "./FarmCard.css";

function FarmCard({ image, name }) {
  return (
    <Grid md={3} container flexDirection="column" alignItems="center">
      <img
        src={`http://localhost:3000/images/${image}`}
        // src={image}
        className="farmImage"
        alt="farm"
      />
      <Typography variant="p" className="farmText">
        {name}
      </Typography>
    </Grid>
  );
}

export default FarmCard;
