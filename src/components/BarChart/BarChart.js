import React from "react";
import productData from "../../assets/data/data.json";
import Chart from "react-apexcharts";
import "./BarChart.scss";

const BarChart = () => {
  console.log(productData.length);
  const official = productData.filter((ele) => ele.official_warranty === true);
  const unofficial = productData.filter(
    (ele) => ele.unofficial_warranty === true
  );
  const noWarranty = productData.filter((ele) => ele.no_warranty === true);
  const usedPhone = productData.filter((ele) => ele.used_phone === true);
  return (
    <div className="barchart-container">
      <Chart
        type="bar"
        width={706}
        height={334}
        series={[
          {
            name: "Phone Conditions",
            data: [
              official.length,
              unofficial.length,
              noWarranty.length,
              usedPhone.length,
            ],
          },
        ]}
        options={{
          title: { text: "Conditions", style: { fontSize: 24 } },
          colors: ["#0095A0"],
          xaxis: {
            tickPlacement: "on",
            categories: ["Official", "Unofficial", "Without warranty", "Used"],
          },
        }}
      ></Chart>
    </div>
  );
};

export default BarChart;
