import React, { useState } from "react";
import { SearchBar } from "./searchBar";
import { Cards } from "./cards";

export const Home = () => {
    let [searchText, setSearchText] = useState("")
console.log(searchText);
  return (
    <div>
      <SearchBar setSearchText={setSearchText}/>
      <Cards searchText={searchText}/>
    </div>
  );
};
