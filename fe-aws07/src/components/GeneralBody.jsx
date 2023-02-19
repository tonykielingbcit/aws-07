import "../styles/generalBody.scss";
import "../styles/actions.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function GeneralBody({action}) {
  const currentLocation = useLocation().pathname;
// console.log("actionnnnnnn: ", action)
    return(
        <div className="general-body">
            <div className="left">
                <NavLink
                    to="/getall"
                    className={`action-item ${
                        currentLocation === "/getall" ? "is-active" : ""
                    }`}
                >
                    Get All Items
                </NavLink>
                <NavLink
                    to="/getone"
                    className={`action-item ${
                        currentLocation === "/getone" ? "is-active" : ""
                    }`}
                >
                    Get One Item
                </NavLink>
                <NavLink
                    to="/create"
                    className={`action-item ${
                        currentLocation === "/create" ? "is-active" : ""
                    }`}
                >
                    Create Item
                </NavLink>
                <NavLink
                    to="/update"
                    className={`action-item ${
                        currentLocation === "/update" ? "is-active" : ""
                    }`}
                >
                    Update Item
                </NavLink>
                <NavLink
                    to="/delete"
                    className={`action-item ${
                        currentLocation === "/delete" ? "is-active" : ""
                    }`}
                >
                    Delete Item
                </NavLink>
            </div>

            <div className="right">
                { !action && 
                    <div className="no-option">
                        <h1>Pick an option</h1>
                    </div>
                }
                <h1>{action}</h1>
            </div>
        </div>
    );
}