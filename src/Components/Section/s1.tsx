import React from "react";
import { FaCalendar } from "react-icons/fa";

const Sec1: React.FC = () => {
  return (
    <section className="">
      <nav className="flex flex-col lg:flex-row justify-between gap-5 ">
        <div className="flex  flex-col max-w-full lg:max-w-[55%] text-left gap-5">
          <img
            className="w-full transition-transform transform hover:scale-105"
            src="/image/i1.jpg"
            alt="Ảnh"
          />
          <h1 className="text-2xl ">
            LSDFi phát triển rực rỡ, eUSD của Lybra thống trị với 70%
          </h1>
          <p className="text-[16px] ">
            Thế giới DeFi đã chứng kiến một cột mốc quan trọng khác khi giá trị
            thị trường của các stablecoin.
          </p>
          <div className="flex gap-5">
            <span className="font-bold">BY ADMIN</span>
            <span className="flex items-center gap-2">
              <FaCalendar />
              <span>20/20/2024</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 lg:max-w-[45%] text-left mt-5 lg:mt-0">
          <div className="flex justify-between gap-3">
            <img
              className="transition-transform transform hover:scale-105"
              src="/image/images.jpg"
              alt="ảnh"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl">
                Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana
              </h1>
              <span className="font-bold">BY ADMIN</span>
              <span className="flex items-center gap-2">
                <FaCalendar />
                <span>20/20/2024</span>
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <img
              className="transition-transform transform hover:scale-105"
              src="/image/images.jpg"
              alt="ảnh"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl">
                Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana
              </h1>
              <span className="font-bold">BY ADMIN</span>
              <span className="flex items-center gap-2">
                <FaCalendar />
                <span>20/20/2024</span>
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <img
              className="transition-transform transform hover:scale-105"
              src="/image/images.jpg"
              alt="ảnh"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl">
                Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana
              </h1>
              <span className="font-bold">BY ADMIN</span>
              <span className="flex items-center gap-2">
                <FaCalendar />
                <span>20/20/2024</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Sec1;
