import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/Fresh&LocalLogo.png";
import PlayStore from "../../assets/images/PlayStore.png";
import AppleStore from "../../assets/images/AppleStore.png";
import Elipse from "../../assets/images/Ellipse.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Grid container xs={12} sm={12} md={12} rowGap={3} className="footer">
        <Grid sm={3} md={2}>
          <img src={Logo} className="footerLogo" alt="logo" />
          <br />
          <Typography variant="p" className="footerTxt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </Typography>
        </Grid>
        <Grid sm={2} md={2} container flexDirection="column" rowGap={1}>
          <Typography className="footerHeading">Shop by Category</Typography>
          <Typography className="footersubHeading">Dairy</Typography>
          <Typography className="footersubHeading">Poultry</Typography>
          <Typography className="footersubHeading">Sea Food</Typography>
          <Typography className="footersubHeading">Vegetables</Typography>
          <Typography className="footersubHeading">Fresh Fruits</Typography>
          <Typography className="footersubHeading">Flowers</Typography>
        </Grid>
        <Grid sm={2} md={2} container flexDirection="column" rowGap={1}>
          <Typography className="footerHeading">Quick Links</Typography>
          <Typography className="footersubHeading">Explore Farms</Typography>
          <Typography className="footersubHeading">Home</Typography>
          <Typography className="footersubHeading">About Us</Typography>
          <Typography className="footersubHeading">FAQs</Typography>
          <Typography className="footersubHeading">Sell with Us</Typography>
          <Typography className="footersubHeading">Privacy Policy</Typography>
          <Typography className="footersubHeading">Terms&Condition</Typography>
        </Grid>
        <Grid sm={4} md={4} container flexDirection="column" rowGap={1}>
          <Typography className="footersubHeading">
            Login to your account
          </Typography>
          <Typography className="footersubHeading">Register with Us</Typography>
          <Grid container justifyContent="flex-start" columnGap={2}>
            <img src={PlayStore} alt="playStore" className="storeImg" />
            <img src={AppleStore} alt="appleStore" className="storeImg" />
          </Grid>
          <Typography className="follow">Follow Us</Typography>
          <Grid container justifyContent="space-between">
            <img src={Elipse} alt="elipse" className="elipseImg" />
            <img src={Elipse} alt="elipse" className="elipseImg" />
            <img src={Elipse} alt="elipse" className="elipseImg" />
            <img src={Elipse} alt="elipse" className="elipseImg" />
          </Grid>
        </Grid>
      </Grid>
      <Grid className="copyrigthGrid">
        <Typography className="copyrightText">
          Copyrigth 2020.All Right Reserved
        </Typography>
      </Grid>
    </footer>
  );
}

export default Footer;
