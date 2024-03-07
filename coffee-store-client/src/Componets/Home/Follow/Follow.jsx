import cup1 from "../../../assets/images/cups/Rectangle 9.png";
import cup2 from "../../../assets/images/cups/Rectangle 10.png";
import cup3 from "../../../assets/images/cups/Rectangle 11.png";
import cup4 from "../../../assets/images/cups/Rectangle 12.png";
import cup5 from "../../../assets/images/cups/Rectangle 13.png";
import cup6 from "../../../assets/images/cups/Rectangle 14.png";
import cup7 from "../../../assets/images/cups/Rectangle 15.png";
import cup8 from "../../../assets/images/cups/Rectangle 16.png";
const Follow = () => {
  return (
    <div className="px-10 md:px-32 py-10">
      <h6 className="text-xl text-[#1B1A1A] text-center">Follow Us Now</h6>
      <h2 className="text-4xl text-center font-semibold pb-10">
        Follow on Instagram
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-24">
        <img src={cup1} alt="" />
        <img src={cup2} alt="" />
        <img src={cup3} alt="" />
        <img src={cup4} alt="" />
        <img src={cup5} alt="" />
        <img src={cup6} alt="" />
        <img src={cup7} alt="" />
        <img src={cup8} alt="" />
      </div>
    </div>
  );
};

export default Follow;
