import { Outlet } from "react-router-dom";
import NavBar from "../Componets/Shared/NavBar/NavBar";
import Footer from "../Componets/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
