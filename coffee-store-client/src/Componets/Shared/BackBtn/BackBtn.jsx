import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const BackBtn = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div onClick={() => handleHome()} className="pt-10 flex items-center gap-2 cursor-pointer">
      <FaArrowLeftLong />
      <span className="text-xl font-semibold">Back to home</span>
    </div>
  );
};

export default BackBtn;
