import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BoxData {
  id: number;
  attributes: {
    title_kienthuc: string;
    date_kienthuc: string;
    content_kienthuc: string;
  };
}

interface BoxProps {
  title: string;
  date: string;
  id: number;
}

const Box: React.FC<BoxProps> = ({ title, date, id }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className=" rounded-md overflow-hidden shadow-md">
        <img
          src="../image/i1.jpg"
          alt={title}
          className="w-full h-full object-cover transition-transform transform hover:scale-110"
        />
        <div className="p-4">
          <Link to={`/Kienthuc/${id}`}>
            {" "}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
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

const Kienthuc: React.FC = () => {
  const [boxes, setBoxes] = useState<BoxData[]>([]);

  useEffect(() => {
    fetch("http://103.141.141.31:1337/api/home-kienthucs")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setBoxes(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-w-[1440px] animate-fadeInDown mx-auto mt-8 p-2 text-white">
      <h1 className="text-3xl text-white mb-10 font-bold">Kiến thức</h1>
      <div className="flex flex-wrap -m-4">
        {boxes.map((item) => (
          <Box
            key={item.id}
            title={item.attributes.title_kienthuc}
            date={item.attributes.date_kienthuc}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Kienthuc;
