import React from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import BookMark from "../../assets/images/bookmark.png";
import BookMarkRed from "../../assets/images/bookmarkRed.png";

import "./Cards.css";

function Cards({ image, name, location, des, weight, kd, discount }) {
  console.log("image", image);
  return (
    <Card>
      <CardMedia
        component="img"
        image={`http://localhost:3000/images/${image}`}
        height="241px"
        alt={name}
      />
      <div className="cardOfferWrapper">
        <div className="cardOfferImg">
          <img src={BookMark} alt="book" />
          <span>Deal of the Day</span>
        </div>
        <div className="cardOfferImg">
          <img src={BookMarkRed} alt="book" />
          <span className="discountText">{discount}</span>
        </div>
      </div>
      <CardContent>
        <Typography className="cardName">{name}</Typography>
        <Typography className="cardLocation">{location}</Typography>
        <Typography className="cardDes">{des}</Typography>
        <Grid container>
          <Typography className="cardWeight">{weight}</Typography>
          <Typography className="cardKd">{kd}</Typography>
        </Grid>
      </CardContent>
      <CardActions className="cartBtn">
        <Button className="btnText">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
