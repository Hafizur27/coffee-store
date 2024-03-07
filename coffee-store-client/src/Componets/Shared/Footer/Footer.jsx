import "./Footer.css";
import footerLogo from "../../../assets/images/more/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="footer_bg px-10 md:px-32">
        <div className="py-5">
          <img className="w-10" src={footerLogo} alt="" />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-2 pt-2">
              <h3 className="text-[#331A15] text-3xl font-semibold">
                Espresso Emporium
              </h3>
              <p className="text-sm w-1/2">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="text-2xl flex gap-2 pt-2">
                <FaFacebook />
                <FaTwitter />
                <FiInstagram />
                <FaLinkedin />
              </div>
              <h3 className="text-[#331A15] text-3xl font-semibold py-2">
                Get in Touch
              </h3>
              <div className="flex items-center gap-2">
                <FaPhone /> +8801444444
              </div>
              <div className="flex items-center gap-2">
                <BiLogoGmail /> info@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                72, Wall street, King Road, Dhaka
              </div>
            </div>
            <div className="pt-2 md:pt-0">
              <div>
                <h3 className="text-[#331A15] text-3xl font-semibold pb-3 text-end">
                  Connect with Us{" "}
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-end">
                    <input
                      className="p-2 outline-none  md:w-1/2"
                      type="text"
                      placeholder="Name"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex justify-end">
                    <input
                      className="p-2 outline-none md:w-1/2"
                      type="email"
                      placeholder="Email"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex justify-end">
                    <textarea
                      className="p-2 outline-none md:w-1/2"
                      name=""
                      placeholder="Message"
                      id=""
                      cols="22"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <input
                      className="border border-black text-lg py-1 px-3 rounded-full"
                      type="submit"
                      value="Send Message"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <h3 className="text-center text-lg text-white py-2 font-semibold">
          Copyright Espresso Emporium ! All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
