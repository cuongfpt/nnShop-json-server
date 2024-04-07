import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/HomePage";
import LayoutWeb from "./components/Layouts/LayoutWeb";
import ShopPage from "./pages/ShopPage";
import Detail_Product from "./pages/Detail_Product";
import LayoutAdmin from "./components/Layouts/LayoutAdmin";
import HomeAdmin from "./components/Admin/HomeAdmin";
import ListProduct from "./components/Admin/ListProduct";
import AddProduct from "./components/Admin/AddProduct";
import EditProduct from "./components/Admin/EditProduct";
import CartPage from "./pages/CartPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import ListCategory from "./components/Admin/ListCategory";
import ListUser from "./components/Admin/ListUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products/:id" element={<Detail_Product />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="products" element={<ListProduct />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
          <Route path="categorys" element={<ListCategory />} />
          <Route path="users" element={<ListUser />} />
        </Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
