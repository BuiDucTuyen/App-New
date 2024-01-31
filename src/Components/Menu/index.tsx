// Trong component React (ví dụ: Menu.tsx)

import React from "react";
import { FaSearch, FaTwitter } from "react-icons/fa";
const Menu: React.FC = () => {
  return (
    <div className="menu-full-wrap">
      <div className="menu-wrap">
        <nav className=" bg-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div className="space-x-4">
              <a href="#" className="text-white">
                Trang chủ
              </a>
              <a href="#" className="text-white">
                Tin tức
              </a>
              <a href="#" className="text-white">
                Kiếm tiền
              </a>
              <a href="#" className="text-white">
                Kiến thức
              </a>
              <a href="#" className="text-white">
                Tuyển dụng
              </a>
              <a href="#" className="text-white">
                Tuyển dụng
              </a>
              <a href="#" className="text-white">
                PTKT
              </a>
            </div>
            <div>
              <form className="flex">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="rounded-l-md p-2 outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-slate-700 rounded-r-md p-2"
                >
                  <FaSearch className="" />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
