import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import ShopCategories from "./components/ShopByCategory/ShopCategories";
import FarmList from "./components/farmlist/FarmList";
import { ShowContextProvider } from "./contexts/EnableProduct/ShowProduct";
import { FarmFilterProvider } from "./contexts/farmfilter/FarmFilter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ShowContextProvider>
        <ShopCategories />
        <Nav />
      </ShowContextProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/farm"
          exact
          element={
            <FarmFilterProvider>
              {" "}
              <FarmList />{" "}
            </FarmFilterProvider>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
