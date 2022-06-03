import React from "react";
import "./Piechart.scss";
import Chart from "react-apexcharts";

import productData from "../../assets/data/data.json";

const Piechart = () => {
  const daraz = productData.filter((ele) => ele.seller_name === "Daraz");
  const pickaboo = productData.filter((ele) => ele.seller_name === "Pickaboo");
  const GadgetGear = productData.filter(
    (ele) => ele.seller_name === "Gadget & Gear"
  );

  return (
    <>
      <div className="piechart-container">
        <Chart
          type="pie"
          width={432}
          height={334}
          series={[daraz.length, pickaboo.length, GadgetGear.length]}
          options={{
            title: { text: "Sources", style: { fontSize: 24 } },
            labels: ["Daraz", "Picaboo", "Gadget & Gear"],
          }}
        ></Chart>
      </div>
    </>
  );
};

export default Piechart;
