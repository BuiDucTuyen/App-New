import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface TintucData {
  id: number;
  attributes: {
    title_tintuc: string;
    date_tintuc: string;
  };
}

interface TintucProps {
  title: string;
  date: string;
  id: number;
}

const TintucBox: React.FC<TintucProps> = ({ title, date, id }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className=" rounded-md overflow-hidden shadow-md">
        <img
          src="/image/images.jpg"
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="p-4">
          <Link to={`/Tintuc/${id}`}>
            {" "}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
          </Link>

          <div className="mt-4 flex items-center justify-between">
            <div className="font-bold">BY ADMIN</div>
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tintuc: React.FC = () => {
  const [tintucData, setTintucData] = useState<TintucData[]>([]);

  useEffect(() => {
    const fetchTintucData = async () => {
      try {
        const response = await fetch(
          "http://103.141.141.31:1337/api/home-tintucs"
        );
        const jsonData = await response.json();
        if (jsonData && jsonData.data) {
          setTintucData(jsonData.data);
        }
      } catch (error) {
        console.error("Error fetching tintuc data:", error);
      }
    };

    fetchTintucData();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-2 text-white">
      <h1 className="text-3xl text-white mb-10 font-bold">Tin tức</h1>
      <div className="flex flex-wrap -m-4">
        {tintucData.map((item) => (
          <TintucBox
            key={item.id}
            title={item.attributes.title_tintuc}
            date={item.attributes.date_tintuc}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Tintuc;
