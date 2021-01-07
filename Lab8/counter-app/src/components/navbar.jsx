import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
      Zamówienia
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-success m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        
      </div>
    </nav>
  );
};

export default NavBar;
