// SignUp.js
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { IAuth } from "@/interfaces/Auth";

const SignUp = () => {
 const { mutate, form } = useAuth({ action: "SignUp" });
 const { register, handleSubmit, formState: { errors } } = form;

 const onSubmit = (data: IAuth) => {
    mutate(data);
 };

 return (
    <div className="background-form">
      <div className="container-form mt-5 ">
        <div className="form">
          <h1 className="text-center mb-5">Register</h1>
          <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)} className="login-form">
            <label htmlFor="" className="label-form">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && <p>Username is required</p>}
            <label htmlFor="" className="label-form">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Password is required</p>}
            <button type="submit" className="btn">
              Register
            </button>
            <p className="message">
              Already registered? <a href="signin">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
 );
};

export default SignUp;
