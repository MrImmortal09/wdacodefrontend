import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="copyright">
          &copy; Copyright {" "}
          All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link href="https://prashant@iiitl.ac.in">Prashant Singh</Link>
        </div>
      </footer>
      <Link
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </div>
  );
};

export default Footer;
