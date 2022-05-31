import React, { useState } from "react";
import "./AddProductModal.scss";
import Cross from "../../assets/images/cross.svg";
import Cancel from "../../assets/images/cancel.svg";
import Publish from "../../assets/images/publish.svg";
import Select from "react-select";

const AddProductModal = ({ open, handleClose }) => {
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = [
    { value: "best value", label: "Best Value" },
    { value: "best performance", label: "Best Performance" },
    { value: "best camera", label: "Best Camera" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div class="modal" style={{ display: open ? "block" : "none" }}>
      <div class="modal-content">
        <div className="modal__top">
          <h3>Add Product</h3>
          <img src={Cross} alt="Cross icon" onClick={handleClose} />
        </div>
        <div className="modal__middle">
          <div className="input-field">
            <label htmlFor="name">Product name</label>
            <input
              type="text"
              placeholder="Enter your product name"
              id="name"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="input-field" style={{ flexBasis: "49%" }}>
              <label htmlFor="brandName">Brand</label>
              <input
                type="text"
                placeholder="Enter brand name"
                id="brandName"
              />
            </div>
            <div className="input-field" style={{ flexBasis: "49%" }}>
              <label htmlFor="RamRom">Ram/Rom</label>
              <input type="text" placeholder="Zip code" id="RamRom" />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="select">Tags</label>
            <Select
              options={optionList}
              placeholder="Search and Select"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
          <div className="input-field">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              placeholder="Enter your product price"
              id="price"
            />
          </div>
        </div>
        <div className="modal__bottom">
          <button className="btn cancel-btn" onClick={handleClose}>
            <img src={Cancel} alt="Cancel Icon" /> Cancel
          </button>
          <button className="btn publish-btn">
            <img src={Publish} alt="Publish icon" /> Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
