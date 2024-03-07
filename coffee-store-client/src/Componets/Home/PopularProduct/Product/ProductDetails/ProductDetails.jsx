import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import BackBtn from "../../../../Shared/BackBtn/BackBtn";

const ProductDetails = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BaseUrl}coffees/${id}`)
      .then((res) => setCoffee(res.data));
  }, [id]);
  return (
    <div className="details_bg px-10 md:px-32 pb-16">
      <div className="max-w-[1320px] mx-auto pb-5">
        <BackBtn />
      </div>
      <div className="grid md:grid-cols-[1fr_2fr] gap-4 bg-[#f5f4f1] items-center p-0 md:p-7 max-w-[1320px] max-h-[687px] mx-auto">
        <img className="max-w-[351px] rounded-md" src={coffee.photo} alt="" />
        <div className="space-y-3 p-4 text-xs md:text-xl">
          <h4 className="text-[#331A15] text-3xl font-semibold">Niceties</h4>
          <p>
            <span className="text-[#1B1A1A] font-semibold ">Name:</span>{" "}
            <span className="text-[#5C5B5B]"></span> {coffee?.name}
          </p>
          <p>
            {" "}
            <span className="text-[#1B1A1A] font-semibold">Chef:</span>{" "}
            {coffee?.chef}
          </p>
          <p>
            {" "}
            <span className="text-[#1B1A1A] font-semibold">Supplier:</span>{" "}
            {coffee?.supplier}
          </p>
          <p>
            {" "}
            <span className="text-[#1B1A1A] font-semibold">Taste:</span>{" "}
            {coffee?.taste}
          </p>
          <p>
            {" "}
            <span className="text-[#1B1A1A] font-semibold">Category:</span>{" "}
            {coffee?.category}
          </p>
          <p>
            {" "}
            <span className="text-[#1B1A1A] font-semibold">Details:</span>{" "}
            {coffee?.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
