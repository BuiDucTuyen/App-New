import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";

const Sec2: React.FC = () => {
  const [postDetail, setPostDetail] = useState<any>({});

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/home-2s?populate=*&filter[id_gte]=2"
        );
        const data = await response.json();

        setPostDetail(data.data[0]);
      } catch (error) {
        console.error("Error fetching post detail:", error);
      }
    };

    fetchPostDetail();
  }, []);

  return (
    <section className="text-white flex flex-col lg:flex-row justify-between gap-5 px-2">
      <nav className="flex flex-col max-w-full lg:max-w-[70%] text-left gap-5 rounded-md overflow-hidden shadow-md p-1">
        <h1 className="text-3xl font-bold">{postDetail?.attributes?.title}</h1>
        <div className="flex gap-5">
          <span className="font-bold">BY ADMIN</span>
          <span className="flex items-center gap-2">
            <FaCalendar />
            <span>{postDetail?.attributes?.date}</span>
          </span>
        </div>
        <img
          className=""
          src={"http://localhost:1337" + postDetail?.attributes?.img?.url}
          alt="Ảnh"
        />
        <span className="max-w-[1000px] text-[#cccccc] text-[16px]">
          {postDetail?.attributes?.content_new}
        </span>
      </nav>
      <nav className="flex flex-col max-w-full  lg:max-w-[30%] lg:flex-row lg:gap-5 lg:flex-wrap mt-5 lg:mt-0 p-1">
        <a href="/">
          <img className="w-[540px] h-[700px]" src="./image/qc.png" alt="" />
        </a>
      </nav>
    </section>
  );
};

export default Sec2;
