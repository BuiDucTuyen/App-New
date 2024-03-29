import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    console.log(1);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="bg-headerBg">
      <header className="relative z-[51]  flex w-full justify-center  pt-10 px-5 text-white">
        <div className=" w-full fixed top-0   shadow', { 'py-4': isScrolled } px-5 py-5    text-inherit">
          <div className="flex items-center justify-between mx-auto max-w-[1440px]">
            <a aria-label="Navigate to the homepage" href="/">
              <div className="flex ">
                <div>
                  <img src="/svg/armory.svg" alt="" />
                </div>
              </div>
            </a>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-5 text-lg softie_1 font-black">
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/TinTuc">Tin tức</Link>
                </li>
                <li>
                  <Link to="/KienThuc">Kiến thức</Link>
                </li>

                <div className="flex items-center justify-center gap-2">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/wolfcapital.vn"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="" />
                  </a>

                  <a
                    target="_blank"
                    href="https://twitter.com/WolfCapital_Vn"
                    rel="noreferrer"
                  >
                    <FaTwitter className="" />
                  </a>

                  <a
                    target="_blank"
                    href="https://youtube.com/@Wolfcapital_vn"
                    rel="noreferrer"
                  >
                    <FaYoutube className="" />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.instagram.com/wolfcapital_vn/"
                    rel="noreferrer"
                  >
                    <FaInstagram className="" />
                  </a>
                </div>
              </ul>
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden z-[52] p-2 -mr-2 text-white bg-primary-light hover:bg-primary-dark transition-all duration-300 rounded"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden z-[52] p-2 -mr-2 text-white bg-primary-light hover:bg-primary-dark transition-all duration-300 rounded"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2C17 2.55228 16.5523 3 16 3H2C1.44772 3 1 2.55228 1 2Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M1 9C1 8.44772 1.44772 8 2 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H2C1.44772 10 1 9.55228 1 9Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M1 16C1 15.4477 1.44772 15 2 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  )}
                </button>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2C17 2.55228 16.5523 3 16 3H2C1.44772 3 1 2.55228 1 2Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1 9C1 8.44772 1.44772 8 2 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H2C1.44772 10 1 9.55228 1 9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1 16C1 15.4477 1.44772 15 2 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H2C1.44772 17 1 16.5523 1 16Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-headerBg">
            <nav className="absolute top-0 left-0 right-0 pt-16 pb-6 px-4 shadow-lg w-screen max-w-[50%]">
              <div className=" ">
                <div>
                  <img src="/svg/armory.svg" alt="" />
                </div>
              </div>
              <ul className="flex flex-col text-left gap-5 pt-20 text-2xl softie_1 font-black">
                <li>
                  <a className="transition-opacity hover:opacity-80" href="/">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a
                    className="transition-opacity hover:opacity-80"
                    href="/TinTuc"
                  >
                    Tin tức
                  </a>
                </li>
                <li>
                  <a
                    className="transition-opacity hover:opacity-80"
                    href="/KienThuc"
                  >
                    Kiến thức
                  </a>
                </li>

                <div className="flex items-center gap-5">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/wolfcapital.vn"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="" />
                  </a>

                  <a
                    target="_blank"
                    href="https://twitter.com/WolfCapital_Vn"
                    rel="noreferrer"
                  >
                    <FaTwitter className="" />
                  </a>

                  <a
                    target="_blank"
                    href="https://youtube.com/@Wolfcapital_vn"
                    rel="noreferrer"
                  >
                    <FaYoutube className="" />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.instagram.com/wolfcapital_vn/"
                    rel="noreferrer"
                  >
                    <FaInstagram className="" />
                  </a>
                </div>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <div className=" flex w-full pt-10 items-center justify-center overflow-hidden px-4 lg:px-10">
        <div className="relative w-full max-w-4xl text-center text-white">
          <div className="logo-ad-wrap ">
            <div className="header-before-ad border border-white ">
              <img
                src="http://wolfcapital.vn/wp-content/uploads/2023/10/banner-quang-cao-okxbitgetbybit-2.png"
                alt="Header Before Ad"
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
