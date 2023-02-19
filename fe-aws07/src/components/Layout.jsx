// import "../App.css";
import "../styles/container.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <div className="container">
      <Header>
        This is header
      </Header>

      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </div>
  )
}

export default Layout;
