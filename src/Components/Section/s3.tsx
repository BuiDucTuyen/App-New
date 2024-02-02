import React from "react";
import { FaCalendar } from "react-icons/fa";
const Sec3: React.FC = () => {
  return (
    <section className="">
      <nav className="flex justify-between items-center gap-3 text-left">
        <div className="flex flex-col max-w-[33%] gap-3 ">
          <img
            className="transition-transform transform hover:scale-105"
            src="/image/images.jpg"
            alt="ảnh"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-xl">
              Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                {" "}
                <span className="font-bold">BY ADMIN</span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  <span>20/20/2024</span>
                </span>
              </div>

              <button className="inline-flex items-center p-2 bg-slate-600 text-white rounded-md transition-transform transform hover:scale-105">
                XEM THÊM <span className="ml-2">&#x2192;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[33%] gap-3">
          <img
            className="transition-transform transform hover:scale-105"
            src="/image/images.jpg"
            alt="ảnh"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-xl">
              Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                {" "}
                <span className="font-bold">BY ADMIN</span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  <span>20/20/2024</span>
                </span>
              </div>

              <button className="inline-flex items-center p-2 bg-slate-600 text-white rounded-md transition-transform transform hover:scale-105">
                XEM THÊM <span className="ml-2">&#x2192;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[33%] gap-3">
          <img
            className="transition-transform transform hover:scale-105"
            src="/image/images.jpg"
            alt="ảnh"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-xl">
              Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                {" "}
                <span className="font-bold">BY ADMIN</span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  <span>20/20/2024</span>
                </span>
              </div>

              <button className="inline-flex items-center p-2 bg-slate-600 text-white rounded-md transition-transform transform hover:scale-105">
                XEM THÊM <span className="ml-2">&#x2192;</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Sec3;
