import React from "react";
import axios from "axios";

const fetch = async (url) => {
  let response;
  await axios
    .get(url)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export default fetch;
