import { Typography, Grid, Button, Modal, Box } from "@mui/material";
import React, { useContext } from "react";
import { ShowProduct } from "../../contexts/EnableProduct/ShowProduct";
import "./ShopCategories.css";
function ShopCategories() {
  const { data, setData } = useContext(ShowProduct);
  return (
    <Modal
      open={data}
      onClose={() => {
        setData(false);
      }}
      disableScrollLock={true}
      hideBackdrop={false}
      className="modal"
    >
      <Box className={"shopCategoryWrapper"}>
        <Grid container md={12} width="90vw" margin="auto" flexDirection="row">
          <Grid
            container
            md={2}
            rowGap={1}
            flexDirection="column"
            className="verticalLine"
          >
            <Typography variant="h6" className="productItem">
              Dairy
            </Typography>
            <Typography variant="p" className="productFlavour">
              Milk
            </Typography>
            <Typography variant="p" className="productFlavour">
              Butter
            </Typography>
            <Typography variant="p" className="productFlavour">
              Cheese
            </Typography>
            <Typography className="ViewAllBtn">View All</Typography>
          </Grid>
          <Grid
            container
            md={2}
            rowGap={1}
            flexDirection="column"
            className="verticalLine"
          >
            <Typography variant="h6" className="productItem">
              Poultry
            </Typography>
            <Typography variant="p" className="productFlavour">
              Egg
            </Typography>
            <Typography variant="p" className="productFlavour">
              Chicken
            </Typography>
            <Typography variant="p" className="productFlavour">
              Turkey
            </Typography>
            <Typography className="ViewAllBtn">View All</Typography>
          </Grid>
          <Grid
            container
            md={2}
            rowGap={1}
            flexDirection="column"
            className="verticalLine"
          >
            <Typography variant="h6" className="productItem">
              Sea Food
            </Typography>
            <Typography variant="p" className="productFlavour">
              Shrimps
            </Typography>
            <Typography variant="p" className="productFlavour">
              Fish
            </Typography>
            <Typography variant="p" className="productFlavour">
              Lobster
            </Typography>
            <Typography className="ViewAllBtn">View All</Typography>
          </Grid>
          <Grid
            container
            md={2}
            rowGap={1}
            flexDirection="column"
            className="verticalLine"
          >
            <Typography variant="h6" className="productItem">
              Vegetables
            </Typography>
            <Typography variant="p" className="productFlavour">
              Leafy
            </Typography>
            <Typography variant="p" className="productFlavour">
              Roots
            </Typography>
            <Typography variant="p" className="productFlavour">
              Seasoning
            </Typography>
            <Typography className="ViewAllBtn">View All</Typography>
          </Grid>
          <Grid
            container
            md={2}
            rowGap={1}
            flexDirection="column"
            className="verticalLine"
          >
            <Typography variant="h6" className="productItem">
              Fresh Fruits
            </Typography>
            <Typography variant="p" className="productFlavour">
              Apple
            </Typography>
            <Typography variant="p" className="productFlavour">
              Citrus
            </Typography>
            <Typography variant="p" className="productFlavour">
              Exotic
            </Typography>
            <Typography className="ViewAllBtn">View All</Typography>
          </Grid>
          <Grid
            container
            md={2}
            rowGap={1}
            flexDirection="column"
            className="verticalLine"
          >
            <Typography variant="h6" className="productItem">
              Flowers
            </Typography>
            <Typography variant="p" className="productFlavour">
              Roses
            </Typography>
            <Typography variant="p" className="productFlavour">
              Blue and Blush
            </Typography>
            <Typography variant="p" className="productFlavour">
              Festive
            </Typography>
            <Typography className="ViewAllBtn">View All</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          margin="auto"
          marginTop="20px"
          md={12}
          width="90vw"
          borderRadius="5px"
          justifyContent="center"
          backgroundColor="#80B435"
        >
          <Button variant="text" className="viewAllCategoriesBtn">
            View All Categories
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ShopCategories;
