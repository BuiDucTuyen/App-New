import React from "react";

const Logo = () => {
  return (
    <div className=" flex  w-full  md:px-10 mt-[30px]">
      <div className="  max-w-[1440px] flex select-none gap-10 overflow-x-hidden">
        <div className="marquee-container flex flex-col md:flex-row gap-20">
          <ul className="flex flex-col md:flex-row min-w-full run flex-shrink-0 content-around items-center gap-20 md:animate-marqueeScroll">
            {renderLogo("Armory", "/svg/armory.svg", 148, 40)}
            {renderLogo("Code Combat", "/svg/code combat.svg", 153, 34)}
            {renderLogo("Orb", "/svg/orb.c2a0ba4d.svg", 113, 46)}
            {renderLogo("Kong", "/svg/kong.44ea9500.svg", 138, 46)}
            {renderLogo("PopSQL", "/svg/popsql-logo.11388509.svg", 136, 32)}
            {renderLogo("Jam", "/svg/jam.8d925373.svg", 117, 48)}
            {renderLogo("Patch", "/svg/patch-logo.4b3a2850.svg", 142, 36)}
            {renderLogo(
              "Monte Carlo",
              "/svg/monte-carlo-logo.d856ff4f.svg",
              211,
              32
            )}
          </ul>
          <ul className="flex flex-col md:flex-row min-w-full run flex-shrink-0 content-around items-center gap-20 md:animate-marqueeScroll">
            {renderLogo("Armory", "/svg/armory.svg", 148, 40)}
            {renderLogo("Code Combat", "/svg/code combat.svg", 153, 34)}
            {renderLogo("Orb", "/svg/orb.c2a0ba4d.svg", 113, 46)}
            {renderLogo("Kong", "/svg/kong.44ea9500.svg", 138, 46)}
            {renderLogo("PopSQL", "/svg/popsql-logo.11388509.svg", 136, 32)}
            {renderLogo("Jam", "/svg/jam.8d925373.svg", 117, 48)}
            {renderLogo("Patch", "p/svg/atch-logo.4b3a2850.svg", 142, 36)}
            {renderLogo(
              "Monte Carlo",
              "/svg/monte-carlo-logo.d856ff4f.svg",
              211,
              32
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const renderLogo = (
  alt: string,
  src: string,
  width: number,
  height: number
) => (
  <li className="leading-0 !text-zinc-200">
    <img
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      decoding="async"
      data-nimg="1"
      style={{ color: "transparent" }}
      src={src}
    />
  </li>
);

export default Logo;
