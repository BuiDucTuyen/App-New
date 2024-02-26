import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  attributes: {
    title_home1: string;
    date_home: string;
    content_home1: string;
  };
}
const Sec1_1: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://103.141.141.31:1337/api/home-sections/"
        );
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col max-w-full gap-5 lg:max-w-[45%] lg:flex-row lg:gap-5 lg:flex-wrap mt-5 lg:mt-0">
      {data
        .filter((item) => item.id > 1)
        .map((item) => (
          <Link
            key={item.id}
            to={`/BaiViet/${item.id}`}
            className="w-full lg:w-[calc(45% - 1rem)]"
          >
            <div className="rounded-md overflow-hidden shadow-md p-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <img
                  className="w-full h-full object-cover transition-transform transform hover:scale-105"
                  src="./image/images.jpg"
                  alt="Ảnh"
                />
                <div className="flex flex-col gap-3 flex-grow">
                  <h1 className="text-xl font-bold">
                    {item.attributes.title_home1}
                  </h1>
                  <span className="font-bold">BY ADMIN</span>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{item.attributes.date_home}</span>
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
