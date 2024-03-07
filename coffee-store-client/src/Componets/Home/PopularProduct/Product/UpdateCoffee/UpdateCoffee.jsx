import { useForm } from "react-hook-form";
// import "./AddCoffee.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BackBtn from "../../../../Shared/BackBtn/BackBtn";

const UpdateCoffee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BaseUrl}coffees/${id}`)
      .then((res) => setCoffee(res.data));
  }, [id]);

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { _id, ...rest } = data;
    axios
      .put(`${import.meta.env.VITE_BaseUrl}coffees/${id}`, rest)
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update this items successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  useEffect(() => {
    reset(coffee);
  }, [coffee, reset]);
  return (
    <div>
      <div className="max-w-[1320px] mx-auto"><BackBtn /></div>
      <div className="add_bg flex justify-center pb-20 pt-5">
        <div className="bg-[#f4f3f0] max-w-[1320px] w-full">
          <div className="space-y-4 py-10 px-2 md:px-0">
            <h2 className="text-xl md:text-4xl font-bold text-center">
              Update Existing Coffee Details
            </h2>
            <p className="text-sm md:text-lg max-w-[932px] text-center mx-auto">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="flex justify-center max-w-[1320px] pb-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[920px] mx-auto pb-4 px-2 md:px-0">
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Name</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee name"
                    {...register("name")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Chef</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee chef"
                    {...register("chef")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[920px] mx-auto pb-4 px-2 md:px-0">
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Supplier</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee supplier"
                    {...register("supplier")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Taste</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee taste"
                    {...register("taste")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[920px] mx-auto pb-4 px-2 md:px-0">
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Category</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee category"
                    {...register("category")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Details</label>
                  <input
                    type="text"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee details"
                    {...register("details")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[920px] mx-auto pb-4 px-2 md:px-0">
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Photo</label>
                  <input
                    type="url"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee photo"
                    {...register("photo")}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <label className="text-lg font-semibold">Price</label>
                  <input
                    type="number"
                    className="p-2 outline-none border border-black"
                    placeholder="Enter coffee price"
                    {...register("price")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 max-w-[920px] mx-auto px-2 md:px-0">
                <input
                  className="bg-[#e3b577] border border-black px-2 py-2 cursor-pointer"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
