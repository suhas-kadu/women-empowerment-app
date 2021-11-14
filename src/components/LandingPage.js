import React from "react";
import logo from "../images/w_logo.svg";
import logo2 from "../images/w2_logo.svg";

const LandingPage = (props) => {
  return (
    <div>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <i>" She came over everything that meant to destroy her "</i>
              </h1>
              <p className="lead my-4 me-5 text-lg-end text-sm-center">
                - Sylvester McNutt III
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Read more
              </button>
            </div>

            <img
              className="img-fluid my-5 w-50 d-none d-sm-block"
              src={logo2}
              alt="showcase"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
