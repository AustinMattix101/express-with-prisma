import { Outlet } from "react-router-dom";
import Navbar from "../../screens/navigation/Navigation";
// import './SharedLayout.css';

import IndexBackground from "../../assets/components/IndexBackground";

const SharedLayout = () => {
  return (
    <>
        <IndexBackground />
        <Navbar />
        <section className="section">
          <Outlet />
        </section>
    </>
  )
}

export default SharedLayout;