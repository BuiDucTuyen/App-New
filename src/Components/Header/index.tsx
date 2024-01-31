import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Menu from "../Menu";
const Header = () => {
  return (
    <section className="mx-auto">
      <header className="relative flex flex-col gap-5   w-full text-white  bg-[#121212]  px-4 pb-12 pt-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-5">
            <div>NEW-APP |</div>
            <div>Tiêu đề các bài báo</div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>KÊNH MẠNG XÃ HỘI: </div>
            <ul className="flex space-x-4 text-white">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/wolfcapital.vn"
                  rel="noreferrer"
                >
                  <FaFacebookF className="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/WolfCapital_Vn"
                  rel="noreferrer"
                >
                  <FaTwitter className="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://youtube.com/@Wolfcapital_vn"
                  rel="noreferrer"
                >
                  <FaYoutube className="" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/wolfcapital_vn/"
                  rel="noreferrer"
                >
                  <FaInstagram className="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo-ad-wrap flex items-center justify-between">
          <div className="site-branding">
            <a className="dark-logo" href="https://wolfcapital.vn/">
              <img
                src="https://wolfcapital.vn/wp-content/uploads/2023/02/Wolf-text-white-6.png"
                alt="Dark Logo"
                width="150"
                height="200"
                className=""
              />
            </a>
          </div>
          <div className="header-before-ad border border-white ">
            <img
              src="http://wolfcapital.vn/wp-content/uploads/2023/10/banner-quang-cao-okxbitgetbybit-2.png"
              alt="Header Before Ad"
              width="850"
              height="200"
              className=""
            />
          </div>
        </div>
        <div className=" ">
          <Menu />
        </div>
      </header>
    </section>
  );
};

export default Header;
