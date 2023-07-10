import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //hook
  useEffect(() => Aos.init({ duration: 2000 }), []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Adress" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div data-aos="fade-up" className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagrap">
              Enjoy life your own way with Traveloka! Meeting all travel and
              lifestyle needs from airline tickets, hotels, entertainment
              tickets with just 1 click...
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineGooglePlus className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <BsFacebook className="icon" />
            </div>
          </div>
          <div data-aos="fade-up" className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3300" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* 2 */}
            <div data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvior
              </li>
            </div>
            {/* 3 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Frand
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                ThaiLand
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                VietNam
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceans
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>TRAVEL WEBSITE THEME</small>
            <small> LE NGOC NHAN 4/7/2023 - 9/7/2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
