import "../styles/generalBody.scss";
import "../styles/actions.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import About from "./About.jsx";
import GetAll from "./CRUD/GetAll.jsx";
import GetOne from "./CRUD/GetOne.jsx";
import Create from "./CRUD/Create.jsx";
import Delete from "./CRUD/Delete.jsx";
import Update from "./CRUD/Update.jsx";

export default function GeneralBody({ action, error, about }) {
  const currentLocation = useLocation().pathname;
  const { itemIdParam } = useParams();
  
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
                {about && 
                    <div className="no-option">
                        <About />
                        <h1>Please, pick an option in the sidebar.</h1>
                    </div> 
                }
                {error && 
                    <div className="no-option">
                        <h1>{error}.</h1>
                        <h1>Please, pick an option in the sidebar.</h1>
                    </div>
                }

                { !action && !error && !about &&
                    <div className="no-option">
                        <h1>Pick an option</h1>
                    </div>
                }

                { action === "getAll" && <GetAll /> }
                { action === "getOne" && <GetOne itemIdParam = {itemIdParam} /> }
                { action === "create" && <Create /> }
                { action === "delete" && <Delete /> }
                { action === "update" && <Update /> }
            </div>
        </div>
    );
}