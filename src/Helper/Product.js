import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
const Product = (curElem) => {
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price}</p>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
}
};
export default Product;