import errorImg from "../../assets/images/404/404.gif";
import BackBtn from "../Shared/BackBtn/BackBtn";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <BackBtn />
      </div>
      <div className="flex justify-center">
        <img src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
