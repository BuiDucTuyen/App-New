import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Detail_kienthuc: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [postData, setPostData] = useState<{
    title_tintuc: string;
    date_tintuc: string;
    content_tintuc: string;
    content_detail_tintuc: Array<{ type: string; children: Array<{ type: string; text: string; bold?: boolean; italic?: boolean }> }>;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://103.141.141.31:1337/api/home-tintucs/${id}`
        );
        const jsonData = await response.json();
        setPostData(jsonData.data.attributes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  
  return (
    <section className="text-white flex flex-col lg:flex-row justify-between gap-5 px-2">
      <nav className="flex flex-col max-w-full lg:max-w-[70%] text-left gap-5 rounded-md overflow-hidden shadow-md p-1">
        {postData ? (
          <>
            <h1 className="text-3xl font-bold ">{postData.title_tintuc}</h1>
            <div className="flex gap-5">
              <span className="font-bold">BY ADMIN</span>
              <span className="flex items-center gap-2">
                <FaCalendar />
                <span>{postData.date_tintuc}</span>
              </span>
            </div>

            <img className="" src="../image/i1.jpg" alt="Ảnh" />
            {/* <span className="max-w-[1000px] text-[#cccccc] text-[17px]">
              {postData.content_tintuc}
            </span> */}
            {/* Render each paragraph separately */}
            {postData.content_detail_tintuc.map((paragraph, index) => (
              <div key={index} className="max-w-[1000px] text-[#cccccc] text-[17px]">
                {paragraph.children.map((child, idx) => (
                  <span key={idx} className={child.bold ? 'font-bold' : child.italic ? 'italic' : ''}>
                    {child.bold && <br />}
                    {child.italic && <br />}
                    {child.text}
                  </span>
                ))}
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </nav>
      <nav className="flex flex-col max-w-full  lg:max-w-[30%] lg:flex-row lg:gap-5 lg:flex-wrap mt-5 lg:mt-0 p-1">
        <a href="/">
          <img
            className="w-[540px] h-[700px]"
            src="../image/qc.png"
            alt="ảnh quảng cáo"
          />
        </a>
      </nav>
    </section>
  );
};

export default Detail_kienthuc;
