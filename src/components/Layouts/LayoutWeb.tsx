import { Header, Footer } from "..";
import { Outlet } from "react-router-dom";
const LayoutWeb = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWeb;
