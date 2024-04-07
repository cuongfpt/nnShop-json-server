import React from "react";

const NavAdmin = () => {
  return (
    <>
      <div className="sidebar h-900px">
        <h1 className="text-center">
          <a href="/admin" className=" text-white text-decoration-none">
            Admin
          </a>
        </h1>
        <ul>
          <hr />
          <li>
            <a href="/admin/products">List Products</a>
          </li>
          <li>
            <a href="/admin/products/add">Add Product</a>
          </li>
          <hr />
          <li>
            <a href="/admin/users">List User</a>
          </li>
          <hr />
          <li>
            <a href="/admin/categorys">List Category</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavAdmin;
