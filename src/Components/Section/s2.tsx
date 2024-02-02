import React from "react";
import { FaCalendar } from "react-icons/fa";
const Sec2: React.FC = () => {
  return (
    <section className="container">
      <nav className="flex flex-col text-left max-w-full gap-5">
        <h1 className="text-2xl">Kiến thức</h1>
        <img
          className="transition-transform transform hover:scale-105"
          src="/image/top-echange-in-vietnamese4.png"
          alt=""
        />
        <div className="flex gap-3">
          <img
            className="max-w-[65%] transition-transform transform hover:scale-105 hover:shadow-md"
            src="/image/i1.jpg"
            alt=""
          />
          <div className="flex flex-col gap-5 max-w-[35%]">
            <h1 className="text-3xl">
              Tổng quan dự án AltLayer – Dự án launchpool thứ 45 trên Binance
            </h1>
            <p className="text-[18px]">
              Dự án AltLayer đưa ra giải pháp để cải thiện việc lãng phí tài
              nguyên khi các dApps có chung một mục đích sử dụng mà lại chạy
              trên nhiều chain khác nhau. 1. AltLayer là gì AltLayer.
            </p>
            <div className="flex gap-3">
              {" "}
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

export default Sec2;
