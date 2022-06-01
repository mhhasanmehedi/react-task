import React from "react";
import Header from "../components/Header/Header";
import Piechart from "../components/Piechart/Piechart";
import "./Home.scss";
import productData from "../assets/data/data.json";

const Home = () => {
  return (
    <>
      <Header />
      <Piechart />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {productData.map((pd) => (
          <span
            style={{ background: "yellow", height: "100px", width: "200px" }}
          >
            {pd.seller_name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Home;
