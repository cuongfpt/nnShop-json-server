import { Outlet, useNavigate } from "react-router-dom";
import NavAdmin from "../NavAdmin";
import { useEffect } from "react";

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const User = JSON.parse(localStorage.getItem("user") || "null");
  console.log("🚀 ~ LayoutAdmin ~ User:", User);
  useEffect(() => {
    if (User?.role !== "admin" || !User) {
      navigate("/notfound");
    }
  }, []);
  return (
    <>
      <div className="mt-5 px-2">
        <div className="d-flex">
          <NavAdmin />
          <div className="main-content w-100">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
