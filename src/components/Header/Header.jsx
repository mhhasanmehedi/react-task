import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";
import AddProductModal from "../AddProductModal/AddProductModal";

const Header = ({ setQuery }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <img className="logo" src={Logo} alt="Logo here" />
          </div>
          <div className="header-right">
            <div className="search-field">
              <input
                type="text"
                className="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Title or Brand"
              />
              <img src={Search} alt="Search" />
            </div>
            <button className="add-product-btn" onClick={handleOpen}>
              Add product
            </button>

            {/* modal================================== */}
            <AddProductModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
