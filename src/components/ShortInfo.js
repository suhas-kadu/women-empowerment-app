import React from "react";

const ShortInfo = (props) => {
  return (
    <div className="col-md">
      <div className="text-center text-lg-start">
        <h1>{props.header}</h1>
        <p className="lead">{props.content}</p>
        <button
          className="btn btn-primary btn-lg mb-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
};

export default ShortInfo;
