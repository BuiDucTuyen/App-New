import React from "react";
import Sec1 from "../Section/s1";
import Sec2 from "../Section/s2";

const Home: React.FC = () => {
  return (
    <div className="bg-slate-800 text-white p-5 flex flex-col gap-[50px]">
      <Sec1 />
      <Sec2 />
    </div>
  );
};

export default Home;
