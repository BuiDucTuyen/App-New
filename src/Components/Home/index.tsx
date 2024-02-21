import React from "react";
import Sec1 from "../Section/s1";
import Sec2 from "../Section/s2";
import Sec3 from "../Section/s3";

const Home: React.FC = () => {
  return (
    <div className="bg-heroBg  text-white mx-auto  h-full p-5 flex flex-col gap-[50px]">
      <div className="max-w-[1440px] flex flex-col gap-[70px]">
        <Sec1 />
        <Sec2 />
        <Sec3 />
      </div>
    </div>
  );
};

export default Home;
