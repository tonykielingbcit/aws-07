import "../styles/container.scss";
import Header from "./Header";
import Footer from "./Footer.jsx";
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

      <Footer />
    </div>
  )
}

export default Layout;
