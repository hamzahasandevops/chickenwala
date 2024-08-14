import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand p-2" href="#">
          <img
            src="https://chickenwala.co.in/svgimage.png"
            alt="Chicken Shop Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                <i className="fas fa-list"></i> Categories
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user"></i> Login
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              type="submit"
              className="btn btn-light border border-2 text-dark w-25"
            >
              {" "}
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
