import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";

const Sec1: React.FC = () => {
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/homes?populate=*"
        );
        const data = await response.json();
        setPostData(data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!postData) {
    return <p>Loading...</p>;
  }

  const { title, content, content_new, date } = postData.attributes;
  const imageUrl = postData.attributes.img.data[0].attributes.url;
  console.log(imageUrl);
  console.log(postData);

  return (
    <section className="text-white flex flex-col lg:flex-row justify-between gap-5 px-2">
      <nav className="flex flex-col max-w-full lg:max-w-[70%] text-left gap-5 rounded-md overflow-hidden shadow-md p-1">
        <h1 className="text-3xl font-bold ">{title}</h1>
        <div className="flex gap-5">
          <span className="font-bold">BY ADMIN</span>
          <span className="flex items-center gap-2">
            <FaCalendar />
            <span>{date}</span>
          </span>
        </div>
        <img className="" src={"http://localhost:1337" + imageUrl} alt="Ảnh" />
        <span className="max-w-[1000px] text-[#cccccc] text-[16px]">
          {content_new}
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

export default Sec1;
