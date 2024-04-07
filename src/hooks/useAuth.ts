// useAuth.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import intance from "@/configs/axios";
import { IAuth } from "@/interfaces/Auth";

type Action = {
  action: "Login" | "SignUp";
};

let userPassword = "";
export const useAuth = ({ action }: Action) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm();
  const { mutate } = useMutation({
    mutationFn: async (userData: IAuth) => {
      switch (action) {
        case "Login":
          userPassword = userData.password;
          return await intance.get(`/users?username=${userData.username}`);
        case "SignUp":
          return await intance.post("/users", {
            ...userData,
            role: "user",
          });
        default:
          return null;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      const user = data?.data[0];

      if (action == "Login" && userPassword == user.password) {
        localStorage.setItem(
          "user",
          JSON.stringify({ user: user.username, role: user.role ,userId: user.id })
        );
        alert("đăng nhập thành công");
        navigate("/");
      }
      if (action == "SignUp" ) {
        alert("đăng ký thành công");
        navigate("/signin");
      }
    },
  });

  return { mutate, form };
};

// useAuth.js hoặc một file khác nơi bạn muốn sử dụng hàm này

// Hàm để lấy thông tin người dùng từ localStorage
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
     return JSON.parse(user);
  }
  return null;
 };
 
 // Hàm để lấy userId từ thông tin người dùng
 export const getUserId = () => {
  const user = getUserFromLocalStorage();
  return user ? user.userId : null;
 };
