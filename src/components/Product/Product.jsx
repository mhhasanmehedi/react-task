import React, { useState } from 'react';
import './Product.scss';

const Product = ({ data }) => {
  const [tag, setTag] = useState([]);
  // if (data.ram >= '4') {
  //   return setTag('Best performance');
  // }
  return (
    <>
      <tr>
        <td>
          <div className='model-box d-flex'>
            <div className='imgbox'>
              <img src={data.phone_images[0]} alt='Phone image' />
            </div>

            <div className='model-name'>
              <h3>
                {data.phone_details.model} <span>{data.brand}</span>
              </h3>
            </div>
          </div>
        </td>
        <td>
          {data.ram}/{data.storage}
        </td>
        <td>
          <div className='tag-name'>
            {/* {data.speciality.slice(0, 3).map((sp, index) => (
              <span
                key={index}
                style={{
                  background: index[0] ? 'red' : index[1] ? 'yellow' : 'green',
                }}
              >
                {sp}
              </span>
            ))} */}
          </div>
        </td>
        <td>Tk {data.phone_price}</td>
      </tr>
    </>
  );
};

export default Product;
