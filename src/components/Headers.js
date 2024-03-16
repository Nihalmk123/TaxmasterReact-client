import React from "react";
import logo from "../assets/invooo.png";
import { Link} from "react-router-dom";

export const Headers = () => {
  return (
    <div className="sidebar d-flex flex-column justify-space-between bg-dark text-white p-2 vh-100">
      <div>
        <a
          className="d-flex align-item-center mt-3"
          style={{ textDecoration: "none" }}
        >
          <img className="fs-5" style={{ width: "35%" }} src={logo} alt="" />
          <span className="fs-5 text-white mt-2">invoice-memo</span>
        </a>
        <hr className="mt-4" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-speedometer me-2 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </a>
          </li>
          <li className="nav-item p-1">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-person me-2 fs-5"></i>
              <span className="">Create-estimates</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="/Create_invoice" className="nav-link text-white">
              <i className="bi bi-person me-2 fs-5"></i>
              <span>Create-invoice</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to='/Create_Tax' className="nav-link text-white">
              <i className="bi bi-person me-2 fs-5"></i>
              <span>Tax-master</span>
            </Link>
          </li>
          {/* <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-person me-2 fs-5"></i>
              <span>Tax-Master</span>
            </a>
          </li> */}
        </ul>
      </div>
      <di>
        <hr className="text-white" />
        <div className="d-flex align-items-center justify-content-center">
       <button className="button fs-6">Free Trail</button>
       </div>
      </di>
    </div>
  );
};
