import axios from "axios";
import { GoEye } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Product = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BaseUrl}coffees/${id}`)
          .then((res) => {
            if (res.data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "This coffee is deleted.",
                icon: "success",
              });
            }
            const updateCoffees = coffees.filter((cof) => cof?._id != id);
            setCoffees(updateCoffees);
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] gap-4 bg-[#f5f4f1] items-center p-7">
      <img
        className="max-w-[185px] min-h-[239px] rounded-md"
        src={coffee.photo}
        alt=""
      />
      <div className="space-y-2 p-4 text-xs md:text-xl">
        <p>
          <span className="text-[#1B1A1A] font-semibold ">Name:</span>{" "}
          <span className="text-[#5C5B5B]"></span> {coffee?.name}
        </p>
        <p>
          {" "}
          <span className="text-[#1B1A1A] font-semibold">
            Chef:
          </span>{" "}
          {coffee?.chef}
        </p>
        <p>
          {" "}
          <span className="text-[#1B1A1A] font-semibold">
            Price:
          </span>{" "}
          {coffee?.price}
        </p>
      </div>
      <div className="flex items-center gap-2 ps-4 md:flex-col md:gap-0">
        <Link to={`/coffee/${coffee._id}`}>
          <button className="bg-[#d2b48c] p-2 text-white rounded-sm block">
            <GoEye />
          </button>
        </Link>
        <Link to={`updatecoffee/${coffee?._id}`}>
          <button className="bg-[#3c393b] p-2 text-white rounded-sm block my-2">
            <MdEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="bg-[#ea4744] p-2 text-white rounded-sm block"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Product;
