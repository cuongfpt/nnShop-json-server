import { useAuth } from "@/hooks/useAuth";
import { IAuth } from "@/interfaces/Auth";
import { FieldValues, SubmitHandler } from "react-hook-form";

const SignIn = () => {
 const { mutate, form } = useAuth({ action: "Login" });
 const { register, handleSubmit, formState: { errors } } = form;

 const onSubmit = (data : IAuth) => {
    mutate(data);
 };
 return (
    <div className="background-form">
      <div className="container-form mt-5 ">
        <div className="form">
          <h1 className="text-center mb-5">Login</h1>
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
              Login
            </button>
            <p className="message">
              New User? <a href="signup">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
 );
};

export default SignIn;
