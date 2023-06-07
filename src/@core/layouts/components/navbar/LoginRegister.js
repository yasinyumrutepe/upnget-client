import React from "react";
import { Sun, Moon } from "react-feather";
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Button, NavItem, NavLink } from "reactstrap";
export default function LoginRegister(props) {
  const { skin, setSkin } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <NavItem className="d-none d-lg-block">
        <NavLink className="nav-link-style">
          <ThemeToggler />
        </NavLink>
      </NavItem>

      <Button color="info" className="ms-1 btn-sm text-white">
        <Link to="/login">Login</Link>
      </Button>
    </ul>
  );
}
