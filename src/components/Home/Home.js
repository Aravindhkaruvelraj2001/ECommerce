import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "./Home.css";
import Organic from "../../assets/images/organic.png";
import Fruitilicious from "../../assets/images/fruitilicious.png";
import Sweetness from "../../assets/images/sweetness.png";
import Eggilious from "../../assets/images/eggillious.png";
import Fruity from "../../assets/images/fruity.png";
import Happiness from "../../assets/images/happiness.png";
// import { CartDetails } from "../../assets/data/CartDetails";
import Cards from "../CustomComponent/Cards";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ShopNow from "../../assets/images/ShopNow.png";
import CategoriesCard from "../CustomComponent/Categories/CategoriesCard";
// import { Categories } from "../../assets/data/Categories.js";
// import { Farm } from "../../assets/data/Farm";
import FarmCard from "../CustomComponent/ExploreFarm/FarmCard";
import {
  dealResponsive,
  promosResponsive,
  topCategoriesResponsive,
  exploreFarmsResponsive,
} from "../../assets/data/Responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetch from "../controllers/fetch";

function Home() {
  const [state, setState] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [farmData, setFarmData] = useState();

  const apiCall = async () => {
    let response;
    response = await fetch(process.env.REACT_APP_Cart_Details);
    setState(response);
    console.log("State", response);
    response = await fetch(process.env.REACT_APP_Categories);
    setCategoriesData(response);
    console.log(response);

    response = await fetch(process.env.REACT_APP_Farm);
    setFarmData(response);
    console.log("farm", response);
  };

  useEffect(() => {
    apiCall();
  }, []);

  let settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: dealResponsive,
  };
  let topCategoriesSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: topCategoriesResponsive,
  };
  let exploreFarmsSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: exploreFarmsResponsive,
  };
  let featuredPromosSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: promosResponsive,
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let slider = useRef();
  const prevHandler = () => {
    slider.slickPrev();
  };
  const nextHandler = () => {
    slider.slickNext();
  };
  let topCategoriesSlider = useRef();
  const prevCategoryHandler = () => {
    topCategoriesSlider.slickPrev();
  };
  const nextCategoryHandler = () => {
    topCategoriesSlider.slickNext();
  };
  let exploreFarmsSlider = useRef();

  const prevExploreHandler = () => {
    exploreFarmsSlider.slickPrev();
  };
  const nextExploreHandler = () => {
    exploreFarmsSlider.slickNext();
  };
  let featuredPromosSlider = useRef();
  const prevPromosHandler = () => {
    featuredPromosSlider.slickPrev();
  };
  const nextPromosHandler = () => {
    featuredPromosSlider.slickNext();
  };

  return (
    <div>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="headerImg"
      >
        <Grid>
          <Typography className="freshText" variant={isMobile ? "h2" : "h1"}>
            Freshest of Produce,
            <br />
            <span>gauranteed!</span>
          </Typography>
        </Grid>
        <Grid>
          <Button className="exploreBtn">Explore Farm</Button>
        </Grid>
      </Grid>

      <Grid container className="promosText">
        <Typography variant="h6" color="#415162" className="headingText">
          Featured Promos
        </Typography>

        <button className="slidingBtn" onClick={prevPromosHandler}>
          <ChevronLeftOutlinedIcon />
        </button>
        <button className="slidingBtn" onClick={nextPromosHandler}>
          <ChevronRightOutlinedIcon />
        </button>
        <Typography className="heading">View All</Typography>
      </Grid>

      <Grid className="sliderWrapper">
        <Slider
          ref={(c) => {
            featuredPromosSlider = c;
          }}
          {...featuredPromosSettings}
        >
          <Grid md={4}>
            <img src={Organic} alt="Organic" className="promosImg" />
          </Grid>
          <Grid md={4}>
            <img src={Fruitilicious} alt="Fruit" className="promosImg" />
          </Grid>
          <Grid md={4}>
            <img src={Sweetness} alt="Sweet" className="promosImg" />
          </Grid>
          <Grid md={4}>
            <img src={Eggilious} alt="Eggilious" className="promosImg" />
          </Grid>
          <Grid md={4}>
            <img src={Fruity} alt="Fruity" className="promosImg" />
          </Grid>
          <Grid md={4}>
            <img src={Happiness} alt="Happiness" className="promosImg" />
          </Grid>
        </Slider>
      </Grid>

      <Grid className="section">
        <div className="dealOfTheDayWrapper">
          <Typography className="dealText" variant="h5">
            Deal Of the Day
          </Typography>
          <Grid className="sliderWrapper" md={12} xs={12} sm={12}>
            <Slider
              ref={(c) => {
                slider = c;
              }}
              {...settings}
            >
              {state &&
                state.map((item) => {
                  return (
                    <Grid xs={12} sm={6} md={4}>
                      <Cards
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        location={item.location}
                        des={item.des}
                        weight={item.weight}
                        kd={item.kd}
                        discount={item.discount}
                      />
                    </Grid>
                  );
                })}
            </Slider>
          </Grid>
        </div>

        <Grid container className="bottomSlider">
          <button onClick={prevHandler} className="slidingBtn">
            <ChevronLeftOutlinedIcon />
          </button>
          <button onClick={nextHandler} className="slidingBtn">
            <ChevronRightOutlinedIcon />
          </button>
          <Typography color="error">View All</Typography>
        </Grid>
        <Grid md={12}>
          <img src={ShopNow} className="shopnowImg" alt="shop now" />
        </Grid>
        <Grid container className="promosText">
          <Typography variant="h6" color="#415162" className="headingText">
            TopCategories
          </Typography>

          <button className="slidingBtn" onClick={prevCategoryHandler}>
            <ChevronLeftOutlinedIcon />
          </button>
          <button className="slidingBtn" onClick={nextCategoryHandler}>
            <ChevronRightOutlinedIcon />
          </button>
          <Typography className="heading">View All</Typography>
        </Grid>

        <Grid className="sliderWrapper" xs={12} sm={12} md={12}>
          <Slider
            ref={(c) => {
              topCategoriesSlider = c;
            }}
            {...topCategoriesSettings}
          >
            {categoriesData &&
              categoriesData.map((food) => {
                return (
                  <CategoriesCard
                    key={food.id}
                    name={food.name}
                    image={food.image}
                  />
                );
              })}
          </Slider>
        </Grid>
        <Grid container className="promosText">
          <Typography variant="h6" color="#415162" className="headingText">
            Explore Farms
          </Typography>

          <button className="slidingBtn" onClick={prevExploreHandler}>
            <ChevronLeftOutlinedIcon />
          </button>
          <button className="slidingBtn" onClick={nextExploreHandler}>
            <ChevronRightOutlinedIcon />
          </button>
          <Typography className="heading">View All</Typography>
        </Grid>
        <Grid className="sliderWrapper">
          <Slider
            ref={(c) => {
              exploreFarmsSlider = c;
            }}
            {...exploreFarmsSettings}
          >
            {farmData &&
              farmData.map((farm) => {
                return <FarmCard image={farm.image} name={farm.name} />;
              })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
