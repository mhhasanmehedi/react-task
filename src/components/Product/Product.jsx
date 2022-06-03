import React from "react";
import "./Product.scss";
import ModalImage from "react-modal-image";

const Product = ({ data }) => {
  return (
    <>
      <tr>
        <td>
          <div className="model-box d-flex">
            <div className="imgbox">
              <ModalImage
                hideDownload={true}
                hideZoom={true}
                showRotate={true}
                small={data.phone_images[0]}
                large={data.phone_images[1]}
                alt={data.phone_title}
              />
            </div>

            <div className="model-name">
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
          <div className="tag-name">
            {(data.phone_price <= 20000 &&
              Number(data.ram) >= 4 &&
              Number(data.storage) >= 64 &&
              data.brand === "Xiaomi") ||
            data.brand === "Realme" ? (
              <span
                style={{
                  border: `1px solid #DD9E10`,
                  color: "#DD9E10",
                }}
              >
                Best Value
              </span>
            ) : (
              ""
            )}
            {Number(data.storage) >= 64 &&
            data.phone_details.external === "microSDXC (dedicated slot)" &&
            data.phone_details.selfieCamera &&
            Number(data.phone_details.selfieCamera.slice(0, 2)) >= 13 ? (
              <span
                style={{
                  border: `1px solid #874C72`,
                  color: "#874C72",
                }}
              >
                Best Camera
              </span>
            ) : (
              ""
            )}

            {Number(data.storage) <= 128 &&
            Number(data.ram) > 4 &&
            data.phone_price > 20000 ? (
              <span
                style={{
                  border: `1px solid #11A0DB`,
                  color: "#11A0DB",
                }}
              >
                Best Performance
              </span>
            ) : (
              ""
            )}
          </div>
        </td>
        <td>Tk {data.phone_price}</td>
      </tr>
    </>
  );
};

export default Product;
