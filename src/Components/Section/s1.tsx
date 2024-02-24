import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sec1_1 from "./s1_1";

const Sec1: React.FC = () => {
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/homes?populate=*"
        );
        const data = await response.json();
        setPostData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="">
      <nav className="flex flex-col lg:flex-row justify-between gap-5 ">
        <div className="flex flex-col max-w-full gap-5 lg:max-w-[55%] text-left rounded-md overflow-hidden shadow-md p-1">
          {postData &&
            postData.map((post: any) => (
              <Link key={post.id} className="flex flex-col gap-5" to="/BaiViet">
                <img
                  className="w-full transition-transform transform hover:scale-105"
                  src={
                    "http://localhost:1337" +
                    post.attributes.img.data[0].attributes.url
                  }
                  alt="Ảnh"
                />
                <h1 className="text-2xl ">{post.attributes.title}</h1>
                <p className="text-[16px] ">{post.attributes.content}</p>
                <div className="flex gap-5">
                  <span className="font-bold">BY ADMIN</span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{post.attributes.date}</span>
                  </span>
                </div>
              </Link>
            ))}
        </div>

        <Sec1_1 />
      </nav>
    </section>
  );
};

export default Sec1;
