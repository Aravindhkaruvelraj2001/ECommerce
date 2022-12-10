import React from "react";
import { Grid, Typography } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import "./Heading.css";

function Heading({ heading }) {
  return (
    <Grid container className="promosText">
      <Typography variant="h6" color="#415162" className="headingText">
        {heading}
      </Typography>

      <button className="slidingBtn">
        <ChevronLeftOutlinedIcon />
      </button>
      <button className="slidingBtn">
        <ChevronRightOutlinedIcon />
      </button>
      <Typography className="heading">View All</Typography>
    </Grid>
  );
}

export default Heading;
