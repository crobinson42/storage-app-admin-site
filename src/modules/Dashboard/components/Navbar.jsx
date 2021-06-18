import React from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <div className="ui secondary  menu">
      <NavLink className="item" to="/">Home</NavLink>
      <NavLink className="item" to="/spaces">Spaces</NavLink>
      <NavLink className="item" to="/customers">Customers</NavLink>

      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>

        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export { Navbar };
