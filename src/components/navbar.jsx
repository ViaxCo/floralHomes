import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "50px",
        paddingRight: "80px",
      }}
    >
      <img
        src="https://www.florahomesgc.com/images/logo.png"
        className="navbar-brand nav-img"
        style={{ width: "12%" }}
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul
          className="navbar-nav ml-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <li className="nav-item active anc">
            <Link to="Home" className="nav-item" style={{ color: "#fff" }}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item anc">
            <Link to="About" className="nav-item" style={{ color: "#fff" }}>
              About
            </Link>
          </li>
          <li className="nav-item anc">
            <Link to="Products" className="nav-item" style={{ color: "#fff" }}>
              <div className="dropdown">
                <button
                  className="btn-default dropbtn"
                  style={{ background: "none" }}
                >
                  Products
                </button>
                <div className="dropdown-content" style={{ marginTop: "10px" }}>
                  <Link to="" className="a">
                    Verification service
                  </Link>
                  <Link to="" className="a">
                    complete property buyer service
                  </Link>
                  <Link to="" className="a">
                    Our Estate
                  </Link>
                  <Link to="" className="a">
                    Design build & manage
                  </Link>
                  <Link to="" className="a">
                    Done-for-you investments
                  </Link>
                  <Link to="" className="a">
                    Advisory
                  </Link>
                  <Link to="" className="a">
                    Sell my property
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item anc">
            <Link to="OurEstate" className="nav-item" style={{ color: "#fff" }}>
              <div className="dropdown">
                <button
                  className="btn-default dropbtn"
                  style={{ background: "none" }}
                >
                  Our Estate
                </button>
                <div className="dropdown-content" style={{ marginTop: "10px" }}>
                  <Link to="" className="a">
                    Fern island
                  </Link>
                  <Link to="" className="a">
                    The hive
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item anc">
            <Link to="Blog" className="nav-item" style={{ color: "#fff" }}>
              Blog
            </Link>
          </li>
          <li className="nav-item anc">
            <Link
              to="Subscription"
              className="nav-item"
              style={{ color: "#fff" }}
            >
              Subscription
            </Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-item">
              <button className="btn" style={{ color: "#fff" }}>
                Register/Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
