import React, { useState } from "react";
import Maincard from "./Maincard";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsondata = await get.json();
    // console.log(data.meals);
    setData(jsondata.meals);
  };
  //   console.log(data);

  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input type="text" placeholder="Enter Dishe" onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <div>
          <Maincard detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
