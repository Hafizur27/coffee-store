import { useForm } from "react-hook-form";
import "./SignUp.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import BackBtn from "../Shared/BackBtn/BackBtn";
import useAuth from "../useAuth/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUpUser, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signUpUser(data.email, data.password)
      .then((result) => {
        // console.log(result.user);
        updateUser(data.username,data.photo)
          .then(() => {
            navigate("/login")
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="max-w-[1320px] mx-auto">
        <BackBtn />
      </div>
      <div className="signIn_bg flex justify-center pb-20 pt-5">
        <div className="bg-[#f4f3f0] max-w-[720px] w-full">
          <div className="space-y-4 py-10 px-2 md:px-0">
            <h2 className="text-xl md:text-4xl font-bold text-center">
              Please Sign Up
            </h2>
          </div>
          <div className="flex justify-center pb-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="grid grid-cols-1 gap-4 max-w-[520px] mx-auto pb-4 px-2 md:px-0">
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Username</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter your username"
                    {...register("username")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Email</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Password</label>
                  <input
                    type="password"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Phot Url</label>
                  <input
                    type="url"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter your photo url"
                    {...register("photo")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 max-w-[520px] mx-auto px-2 md:px-0">
                <input
                  className="bg-[#e3b577] border border-black px-2 py-2 cursor-pointer"
                  type="submit"
                />
              </div>
              <div className="text-end pe-[100px] pt-3 text-sm">
                Already have an account ? Please{" "}
                <Link className="font-bold text-lg" to="/signup">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
