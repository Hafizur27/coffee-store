import "./Banner.css";
import icon1 from "../../../assets/images/icons/1.png";
import icon2 from "../../../assets/images/icons/2.png";
import icon3 from "../../../assets/images/icons/3.png";
import icon4 from "../../../assets/images/icons/4.png";
const Banner = () => {
  return (
    <div className="pb-10">
      <div className="banner_bg  h-[28vh] md:h-[85vh] text-white flex justify-end items-center px-2 md:px-0">
        <div className="space-y-3">
          <h2 className="text-lg md:text-4xl w-1/2">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="md:w-1/2 text-xs">
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-[#402925] bg-[#e3b577] px-2 py-1 font-semibold md:px-4 md:py-2 md:font-bold">
            Learn More
          </button>
        </div>
      </div>
      <div className="px-10 md:px-32 grid grid-cols-1 md:grid-cols-4 gap-4 py-5 bg-[#eceae3]">
        <div className="space-y-2">
          <img src={icon1} alt="" />
          <h3 className="text-lg font-semibold">Awesome Aroma</h3>
          <p className="text-xs w-2/3">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon2} alt="" />
          <h3 className="text-lg font-semibold">High Quality</h3>
          <p className="text-xs w-2/3">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon3} alt="" />
          <h3 className="text-lg font-semibold">Pure Grades</h3>
          <p className="text-xs w-2/3">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="space-y-2">
          <img src={icon4} alt="" />
          <h3 className="text-lg font-semibold">Proper Roasting</h3>
          <p className="text-xs w-2/3">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
