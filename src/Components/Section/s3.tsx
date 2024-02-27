import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface KienthucData {
  id: number;
  attributes: {
    title_kienthuc: string;
    date_kienthuc: string;
    content_kienthuc: string;
    content_detail_kienthuc: string;
  };
}

const Sec3: React.FC = () => {
  const [data, setData] = useState<KienthucData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://103.141.141.31:1337/api/home-kienthucs"
        );
        const jsonData = await response.json();
        const filteredData = jsonData.data.filter(
          (item: KienthucData) => item.id > 1
        );
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="">
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 rounded-md overflow-hidden shadow-md p-1 pb-2"
          >
            <img
              className="w-full h-full object-cover transition-transform transform hover:scale-110"
              src={"./image/i1.jpg"}
              alt="Ảnh"
            />

            <div className="flex flex-col gap-3">
              <h1 className="text-xl">{item.attributes.title_kienthuc}</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {" "}
                  <span className="font-bold">BY ADMIN</span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{item.attributes.date_kienthuc}</span>
                  </span>
                </div>

                <Link
                  to={`/Kienthuc/${item.id}`}
                  className="inline-flex items-center p-2 bg-slate-600 text-white rounded-md transition-transform transform hover:scale-105"
                >
                  XEM THÊM <span className="ml-2">&#x2192;</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Sec3;
