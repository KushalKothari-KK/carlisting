import React, { useState } from "react";
import "./style.css";
import Cars from "./carsApi";
import CarCard from "./CarCard";
import Navbar from "./Navbar";

const uniqueList= [...new Set(Cars.map((curEle)=>{
    return curEle.brand;
}),),"All",]


const Car = () => {
  const [carData, setCarData] = useState(Cars);
  const [carList, setCarList] = useState(uniqueList);

// Cars items filter by onClick from nav
  const filterItems = (catg) => {
      if(catg==="All"){
        setCarData(Cars)
        return;
      }
    const updatedList = Cars.filter((curEle) => {
      return curEle.brand === catg;
    });
    setCarData(updatedList);
  };
  return (
    <>
      <Navbar filterItems={filterItems} carList={carList} />
      <CarCard carData={carData} />
    </>
  );
};

export default Car;
