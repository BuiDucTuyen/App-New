import React from "react";

const Sec2: React.FC = () => {
  return (
    <section className="">
      <div className="flex  justify-between gap-5">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-left">Kiến thức</h2>
          <img
            src="http://wolfcapital.vn/wp-content/uploads/2023/10/banner-quang-cao-okxbitgetbybit-2.png"
            alt="Header Before Ad"
            className="w-[1000px] h-[180px]"
          />
          <div className="flex justify-between gap-2">
            <img
              src="https://wolfcapital.vn/wp-content/uploads/2024/01/Altlayer1.jpg"
              alt=""
              width="300"
              height="300"
            />
            <div className="text-left ">
              <h1 className="text-2xl">
                Tổng quan dự án AltLayer – Dự án launchpool thứ 45 trên Binance
              </h1>
              <p className="text-[15px] mt-2 max-w-[500px]">
                Dự án AltLayer đưa ra giải pháp để cải thiện việc lãng phí tài
                nguyên khi các dApps có chung một mục đích sử dụng mà lại chạy
                trên nhiều chain khác nhau. 1. AltLayer là gì AltLayer.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl text-left">Bài viết gần đây</h2>
          <img
            decoding="async"
            width="320"
            height="320"
            src="https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1.jpg"
            className="attachment-neeon-size2 size-neeon-size2 wp-post-image lazyautosizes ls-is-cached lazyloaded"
            alt=""
            data-src="https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1.jpg"
            data-srcset="https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1.jpg 1280w, https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1-300x169.jpg 300w, https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1-1024x576.jpg 1024w, https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1-768x432.jpg 768w"
            data-sizes="auto"
            sizes="764px"
            srcSet="https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1.jpg 1280w, https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1-300x169.jpg 300w, https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1-1024x576.jpg 1024w, https://wolfcapital.vn/wp-content/uploads/2024/01/Jupiter1-768x432.jpg 768w"
          />
        </div>
      </div>
    </section>
  );
};

export default Sec2;
