import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import FarmHero from "../../assets/images/FarmHero.png";
import FarmCard from "../CustomComponent/ExploreFarm/FarmCard";
import SideNav from "../CustomComponent/sidenav/SideNav";
import { FarmFilter } from "../../contexts/farmfilter/FarmFilter";
// import { Farm } from "../../assets/data/Farm";
import Close from "../../assets/images/close.png";
import fetch from "../controllers/fetch";
import "./FarmList.css";

function FarmList() {
  const [state, setState] = useState();
  const [name, setName] = useState();
  const apiCall = async () => {
    let response;
    response = await fetch(process.env.REACT_APP_Farm);
    setState(response);
    // console.log("State", response);
  };
  useEffect(() => {
    apiCall();
  }, []);
  const { data, updateValue, deleteValue } = useContext(FarmFilter);
  // const show = (arg) => {
  //   console.log("arg", arg);
  // };
  // console.log(state);
  return (
    <Grid className="farmListWrapper">
      <img src={FarmHero} alt="FarmHero" className="FarmHeroImg" />
      <Grid container md={12} xs={12} sm={12} className="sideNavFarmWrapper">
        <Grid className="boxShadow" md={2} xs={12} sm={12}>
          <SideNav name={name} />
        </Grid>
        <Grid md={10} className="farmWrapper" xs={12} sm={12}>
          <Grid className="headingWrapper">
            <Grid marginBottom="30px">
              <Typography variant="p">
                <span className="home">Home / </span>
                <span className="farm">Farm</span>
              </Typography>
            </Grid>

            <Grid className="headingWrapper">
              <Typography>
                <span className="ExploreText">Explore Farms</span>
                <span> | </span>
                {data.map((d) => {
                  return (
                    <React.Fragment key={d}>
                      <span className="nameBtnWrapper">
                        <span className="checkedfilter">{d}</span>

                        <img
                          className="closeBtnImg"
                          onClick={() => {
                            deleteValue(d);
                            setName(d);
                          }}
                          src={Close}
                          alt="close"
                        />
                      </span>
                    </React.Fragment>
                  );
                })}
              </Typography>
            </Grid>
          </Grid>
          <Grid container flexDirection="row" rowGap={4}>
            {state &&
              state.map((farm) => {
                return <FarmCard image={farm.image} name={farm.name} />;
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FarmList;
