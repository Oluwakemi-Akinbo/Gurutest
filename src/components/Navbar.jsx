import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <a href="" className="navbar-brand">
          Blogone
        </a>
        <button
          className="navbar-toggler"
          data-bs-target="#guru"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="guru">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
