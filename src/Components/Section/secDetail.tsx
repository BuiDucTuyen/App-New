// Component.tsx
import React from "react";
import { FaCalendar } from "react-icons/fa";

interface BoxProps {
  imageSrc: string;
  title: string;
}

const Box: React.FC<BoxProps> = ({ imageSrc, title }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className=" rounded-md overflow-hidden shadow-md">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>

          <div className="mt-4 flex items-center justify-between">
            <div className="font-bold">BY ADMIN</div>
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>20/20/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail1: React.FC = () => {
  const boxes = [
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
      content: "Content 1",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
    {
      imageSrc: "/image/images.jpg",
      title: "Worldcoin công bố những phát triển mới trong không gian",
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-2 text-white">
      <h1 className="text-3xl text-white mb-10">Tin tức</h1>
      <div className="flex flex-wrap -m-4">
        {boxes.map((box, index) => (
          <Box key={index} {...box} />
        ))}
      </div>
    </div>
  );
};

export default Detail1;
