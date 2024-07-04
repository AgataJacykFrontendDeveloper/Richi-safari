import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div>
        <Outlet /> {/* Call to render a child component */}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
