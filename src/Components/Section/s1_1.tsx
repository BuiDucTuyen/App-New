import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sec1_1: React.FC = () => {
  const [postData, setPostData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/home-2s?populate=*&filter[id_gte]=2"
        );
        const data = await response.json();

        setPostData(data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col max-w-full gap-5 lg:max-w-[45%] lg:flex-row lg:gap-5 lg:flex-wrap mt-5 lg:mt-0">
      {postData.map((post: any) => (
        <Link
          to={`/baiviet/${post.id}`}
          key={post.id}
          className="w-full lg:w-[calc(45% - 1rem)]"
        >
          <div className="rounded-md overflow-hidden shadow-md p-1">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <img
                className="w-full md:w-auto transition-transform transform hover:scale-105"
                src={
                  "http://localhost:1337" +
                  post.attributes.img.data[0].attributes.url
                }
                alt="Ảnh"
              />
              <div className="flex flex-col gap-3 flex-grow">
                <h1 className="text-xl">{post?.attributes?.title}</h1>
                <span className="font-bold">BY ADMIN</span>
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{post?.attributes?.date}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sec1_1;
