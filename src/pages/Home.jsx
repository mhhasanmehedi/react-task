import React from 'react';
import Header from '../components/Header/Header';
import Piechart from '../components/Piechart/Piechart';
import './Home.scss';
import Products from '../components/Products/Products';

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Piechart />
      </div>
      <Products />
    </>
  );
};

export default Home;
