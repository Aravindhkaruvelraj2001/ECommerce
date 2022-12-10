import React, { createContext, useState } from "react";

export const ShowProduct = createContext();

export function ShowContextProvider(props) {
  const [data, setData] = useState(false);
  return (
    <ShowProduct.Provider value={{ data, setData }}>
      {props.children}
    </ShowProduct.Provider>
  );
}
