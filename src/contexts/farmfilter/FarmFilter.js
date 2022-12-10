import React, { createContext, useState } from "react";

export const FarmFilter = createContext();

export function FarmFilterProvider(props) {
  const [data, setData] = useState([]);
  const updateValue = (val) => {
    setData([...data, val]);
  };
  const deleteValue = (val) => {
    let arr = data;
    arr = arr.filter((d) => {
      if (d !== val) {
        return d;
      }
    });
    setData(arr);
  };
  return (
    <FarmFilter.Provider value={{ data, updateValue, deleteValue }}>
      {props.children}
    </FarmFilter.Provider>
  );
}
