import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sec1_1 from "./s1_1";

const Sec1: React.FC = () => {
  const [sech1Data, setSech1Data] = useState<{
    attributes: {
      title_home1: string;
      content_home1: string;
      date_home: string;
    };
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://103.141.141.31:1337/api/home-sections/"
        );
        const jsonData = await response.json();
        setSech1Data(jsonData.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const item = { id: 1 };
  return (
    <section className="animate-fadeInDown">
      <nav className="flex flex-col lg:flex-row justify-between gap-5 ">
        <div className="flex flex-col max-w-full gap-5 lg:max-w-[55%] text-left rounded-md overflow-hidden shadow-md p-1">
          {sech1Data ? (
            <Link className="flex flex-col gap-5" to={`/BaiViet/${item.id}`}>
              <img
                className="w-full transition-transform transform hover:scale-105"
                src={"./image/i1.jpg"}
                alt="Ảnh"
              />
              <h1 className="text-2xl font-bold">
                {sech1Data.attributes.title_home1}
              </h1>
              <p className="text-[16px] ">
                {sech1Data.attributes.content_home1}
              </p>
              <div className="flex gap-5">
                <span className="font-bold">BY ADMIN</span>
                <span className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{sech1Data.attributes.date_home}</span>
                </span>
              </div>
            </Link>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <Sec1_1 />
      </nav>
    </section>
  );
};

export default Sec1;
// data-aos="fade-down"
