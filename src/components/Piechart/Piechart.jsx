import React from "react";
import "./Piechart.scss";
import Chart from "react-apexcharts";

import productData from "../../assets/data/data.json";

const Piechart = () => {
  const daraz = productData.filter((ele) => ele.seller_name === "Daraz");
  const pickaboo = productData.filter((ele) => ele.seller_name === "Pickaboo");
  // const bikroy = productData.filter((ele) => ele.seller_name === "Bikroy");

  return (
    <>
      <div className="piechart-container">
        <Chart
          type="pie"
          width={432}
          height={334}
          series={[daraz.length, pickaboo.length, 2]}
          options={{
            title: { text: "Sources", style: { fontSize: 24 } },
            labels: ["Daraz", "Picaboo", "Bikroy"],
          }}
        ></Chart>
      </div>
    </>
  );
};

export default Piechart;
