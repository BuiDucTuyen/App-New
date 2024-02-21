import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footter from "../Footter";
import Logo from "./logo";

export const Layout = ({ children }: any) => {
  return (
    <main className="bg-headerBg items-center overflow-clip flex flex-col gap-[30px]">
      <Header />
      <Logo />
      {children}
      <Footter />
    </main>
  );
};
