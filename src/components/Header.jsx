import React from "react";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <Link to="/" className="logo">
            <h2 className="logo-text">HOMME</h2>
          </Link>
          <nav className="navbar">
            <div className="search">
              <input type="text" placeholder="search.." />
              <TbSearch className="search-icon"/>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
