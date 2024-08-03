import React from "react";
import "./Products.scss";
import ProductsData from "../../assets/data/data.json";
import Product from "../Product/Product";

const Products = ({ search }) => {
  return (
    <div className="product-container">
      <div className="container">
        <div className="product__title d-flex">
          <h3>All Product</h3>
          <div className="sorting d-flex">
            <span>Sort by:</span>
            <select>
              <option>All Products</option>
              <option>All Products</option>
              <option>All Products</option>
            </select>
          </div>
        </div>
        <div className="products">
          {search(ProductsData).map((data, index) => (
            <Product data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
