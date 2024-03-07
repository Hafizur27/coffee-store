import axios from "axios";
import { useEffect, useState } from "react";
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
import Product from "./Product/Product";
import "./PopularProduct.css"

const PopularProduct = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BaseUrl}coffees`)
      .then((res) => setCoffees(res.data));
  }, []);
  return (
    <div className="py-10 popular_bg">
      <div className="text-center">
        <h6 className="text-sm">---Sip & Savor ---</h6>
        <h2 className="text-4xl font-bold">Our Popular Products</h2>
      </div>
      <Link to="/addcoffe">
        <div className="flex justify-center pt-4">
          <button className="flex items-center gap-2 bg-[#e3b577] border border-black px-2 py-1 ">
            <span className="text-white">Add Coffee</span>
            <span className="pt-1">
              <BsCup />
            </span>
          </button>
        </div>
      </Link>
      <div
        className="px-10 md:px-32 pt-10 grid grid-cols-1 md:grid-cols-2 gap-4
      "
      >
        {coffees?.map((coffee) => (
          <Product coffees={coffees} setCoffees={setCoffees} key={coffee?._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
