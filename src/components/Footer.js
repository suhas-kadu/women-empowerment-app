import React from "react";

const Footer = (props) => {
  return (
    <div className="text-center text-light bg-dark py-3">
      <h3>Connect with us</h3>
      <a href="#">
        <i class="bi bi-twitter text-light m-1 px-3"></i>
      </a>
      <a href="#">
        <i class="bi bi-linkedin text-light m-1 px-3"></i>
      </a>
      <a href="#">
        <i class="bi bi-facebook text-light m-1 px-3"></i>
      </a>
      <a href="#">
        <i class="bi bi-github text-light m-1 px-3"></i>
      </a>
      <p className="pt-4">Copyright © TY-B 23, 2021</p>
    </div>
  );
};

export default Footer;
