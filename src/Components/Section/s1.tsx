import React from "react";
import { FaCalendar } from "react-icons/fa";
const articles = [
  {
    imageUrl: "/image/images.jpg",
    title: "Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana",
    author: "ADMIN",
    date: "20/20/2024",
  },
  {
    imageUrl: "/image/images.jpg",
    title: "Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana",
    author: "ADMIN",
    date: "20/20/2024",
  },
  {
    imageUrl: "/image/images.jpg",
    title: "Tìm hiểu về Jupiter – Nền tảng DEX Aggregator trên Solana",
    author: "ADMIN",
    date: "20/20/2024",
  },
];
const Sec1: React.FC = () => {
  return (
    <section className="">
      <nav className="flex flex-col lg:flex-row justify-between gap-5 ">
        <div className="flex  flex-col max-w-full lg:max-w-[55%] text-left gap-5 rounded-md overflow-hidden shadow-md p-1">
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
        <div className="flex flex-col max-w-full gap-3 lg:max-w-[45%] text-left mt-5 lg:mt-0 ">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex justify-between gap-3 rounded-md overflow-hidden shadow-md p-1"
            >
              <img
                className="transition-transform transform hover:scale-105"
                src={article.imageUrl}
                alt="ảnh"
              />
              <div className="flex flex-col gap-3 ">
                <h1 className="text-xl">{article.title}</h1>
                <span className="font-bold">BY {article.author}</span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{article.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Sec1;
