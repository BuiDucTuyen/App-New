import { FaCalendar } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface KienthucData {
  id: number;
  attributes: {
    title_kienthuc: string;
    date_kienthuc: string;
    content_kienthuc: string;
  };
}
const Sec2: React.FC = () => {
  const [kienthucData, setKienthucData] = useState<KienthucData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://103.141.141.31:1337/api/home-kienthucs"
        );
        const jsonData: { data: KienthucData[] } = await response.json();
        const dataWithId1 = jsonData.data.find((item) => item.id === 1);
        if (dataWithId1) {
          setKienthucData(dataWithId1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className=" mx-auto">
      <nav className="flex flex-col gap-5">
        <h1 className="text-3xl text-left font-bold">Kiến thức</h1>
        <img
          className="transition-transform transform hover:scale-105 w-full max-w-[1440px] mx-auto"
          src="/image/top-echange-in-vietnamese4.png"
          alt=""
        />
        <div className="flex flex-col gap-5 md:flex-row rounded-md overflow-hidden shadow-md p-1">
          {kienthucData && (
            <>
              <img
                className="w-full md:max-w-[65%] transition-transform transform hover:scale-105 hover:shadow-md"
                src="/image/i1.jpg"
                alt=""
              />
              <div className="flex flex-col gap-5 md:max-w-[35%]">
                <Link className="text-2xl lg:text-3xl font-bold" to="">
                  <h1>{kienthucData.attributes.title_kienthuc}</h1>
                </Link>

                <p className="text-[18px] lg:text-[18px]">
                  {kienthucData.attributes.content_kienthuc}
                </p>
                <div className="flex gap-3">
                  <span className="font-bold">BY ADMIN</span>
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{kienthucData.attributes.date_kienthuc}</span>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Sec2;
