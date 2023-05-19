import React from "react";
import "./Modal.scss";

const Modal = ({ image, title, description }) => {
  function createMarkup() {
    return { __html: description };
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <img src={image} alt="img" />
          </div>
          <div className="modal-body">{title}.</div>
          <div className="modal-footer">
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-bs-dismiss="modal"
        ></button>
      </div>
    </div>
  );
};

export default Modal;
