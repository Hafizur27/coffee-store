import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../assets/images/more/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-[#372727]">
      <div className="flex justify-between md:flex-col">
        <button
          className="text-3xl p-2 duration-200 lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 /> : <MdMenu />}
        </button>
        <div className="flex items-center justify-between">
          <img className="h-12 w-12 md:h-20 md:w-24 pt-2" src={logo} alt="" />
          <ul
            className={`absolute p-4 font-semibold bg-[#504444] text-center rounded-md ms-2 mt-2 text-white lg:flex lg:gap-4 lg:text-xl lg:static lg:bg-transparent lg:ms-0 lg:mt-0 lg:rounded-none ${
              isOpen ? "top-11 left-0 w-1/2" : "-top-40"
            } `}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            {user?.email ? (
              <>
                <li className="cursor-pointer" onClick={() => handleSignOut()}>
                  Sign Out
                </li>
                <li>
                  <img
                    title={user.displayName}
                    className="h-10 w-10 rounded-full cursor-pointer"
                    src={user?.photoURL}
                    alt=""
                  />
                </li>
              </>
            ) : (
              <Link to="/signin">
                <li>Sign In</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
