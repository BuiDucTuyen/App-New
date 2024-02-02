import React from "react";
import Sec1 from "../Section/s1";
import Sec2 from "../Section/s2";
import Sec3 from "../Section/s3";
import Logo from "../Section/logo";

const Home: React.FC = () => {
  return (
    <div className="  text-white  h-full p-5 flex flex-col gap-[50px]">
      <div className="max-w-[1440px]  flex flex-col gap-[70px]">
        <Sec1 />
        <div className="flex flex-col gap-[30px]">
          <Sec2 />
          <Sec3 />
        </div>
      </div>
    </div>
  );
};

export default Home;
