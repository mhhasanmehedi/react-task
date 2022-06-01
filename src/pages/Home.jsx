import React from 'react';
import Header from '../components/Header/Header';
import Piechart from '../components/Piechart/Piechart';
import './Home.scss';
import productData from '../assets/data/data.json';

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Piechart />
      </div>
      <div
        className='container'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        {productData.map((pd, index) => (
          <span
            style={{
              background: 'rgb(24 219 165)',
              height: '100px',
              width: '386px',
            }}
          >
            {`Id: ${index + 1}`} <br />
            {`Name: ${pd.seller_name}`}
          </span>
        ))}
      </div>
    </>
  );
};

export default Home;
