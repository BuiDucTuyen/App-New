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

const Sec3: React.FC = () => {
  return (
    <section className="">
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-md overflow-hidden shadow-md p-1 pb-2"
          >
            <img
              className="transition-transform transform hover:scale-105"
              src={article.imageUrl}
              alt="ảnh"
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl">{article.title}</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {" "}
                  <span className="font-bold">BY {article.author}</span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{article.date}</span>
                  </span>
                </div>

                <button className="inline-flex items-center p-2 bg-slate-600 text-white rounded-md transition-transform transform hover:scale-105">
                  XEM THÊM <span className="ml-2">&#x2192;</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Sec3;
