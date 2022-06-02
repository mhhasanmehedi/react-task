import React, { useEffect, useState } from 'react';
import './Piechart.scss';
import Chart from 'react-apexcharts';
import productData from '../../assets/data/data.json';

const Piechart = () => {
  const [sellerName, setSellerName] = useState([]);
  const [phonePercentage, setPhonePercentage] = useState([]);
  useEffect(() => {
    const sName = [];
    const pPercentage = [];
    const data = productData;
    for (let i = 0; i < data.length; i++) {
      sName.push(data[i].seller_name);
      pPercentage.push(data[i]);
    }

    setSellerName(sName);
    setPhonePercentage(pPercentage);
  }, []);

  return (
    <>
      <div className='piechart-container'>
        <h3>Welcome to Piechart</h3>
        <Chart
          type='pie'
          width={432}
          height='550'
          series={[35, 30, 35]}
          options={{
            title: { text: 'Sources' },
            labels: ['Daraz', 'Bikroy', 'Picaboo'],
          }}
        ></Chart>
      </div>
    </>
  );
};

export default Piechart;
