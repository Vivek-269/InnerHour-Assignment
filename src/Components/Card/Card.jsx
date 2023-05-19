import React from "react";
import "./Card.scss";

const Card = ({ image, title, description }) => {
  return (
    <div
      className="card"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <div className="img-div">
        <img src={image} className="card-img-top" alt="img" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}.</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
