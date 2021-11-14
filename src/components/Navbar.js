import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-2">
        <div className="container">
          <a href="#" className="navbar-brand">
            Women's Empowerment
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Self-defence
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Connect with NGOs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Education
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item bg-danger text-white">
                <a href="#" className="nav-link active h5 pb-0">
                  HELP
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Login/Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
