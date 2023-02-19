import "../styles/header.scss";
import { NavLink, useLocation } from "react-router-dom";

export default () => {
  const currentLocation = useLocation().pathname;

  return (
    <header>
        <NavLink
            to="/"
            className={`menu-item ${
               currentLocation === "/" ? "is-active" : ""
            }`}
        >
            Home
        </NavLink>



        <NavLink
            to="/about"
            className={`menu-item ${
                currentLocation === "/about" ? "is-active" : ""
            }`}
            >
            About
        </NavLink>

    </header>
  );
};
