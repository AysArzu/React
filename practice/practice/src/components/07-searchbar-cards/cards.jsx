import React from "react";
import { MyCard } from "./card";
import data from "../../assets/flowers.json";

export const Cards = (props) => {
    let filteredArray= data.filter((item)=>item.name.toLowerCase().includes(props.searchText.toLowerCase()));
  return (
    <div className="d-flex flex-wrap justify-content-center">
{props.searchText ? filteredArray.map((item)=><span key={item.name}><MyCard {...item}/></span>):data.map((item)=><span key={item.name}><MyCard {...item}/></span>)})

    </div>
  );
};
