import React, { useState } from "react";
import Header from "../components/Header/Header";
import Piechart from "../components/Piechart/Piechart";
import "./Home.scss";
import Products from "../components/Products/Products";
import BarChart from "../components/BarChart/BarChart";

const Home = () => {
  const [query, setQuery] = useState("");

  const keys = ["brand", "phone_title"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <>
      <Header setQuery={setQuery} />
      <div className="container">
        <div className="chart">
          <Piechart />
          <BarChart />
        </div>
      </div>
      <Products search={search} />
    </>
  );
};

export default Home;
