import React from "react";

const Footter = () => {
  return (
    <footer className="relative bg-top flex w-full items-center justify-center overflow-hidden bg-heroBg  px-4 pb-12 pt-12 md:px-10 md:pb-44 md:pt-20">
      <div className="absolute h-full w-full brightness-75"></div>
      <div className="z-10 flex w-full max-w-5xl flex-col gap-y-12 font-medium text-white md:flex-row text-left">
        <dl className="w-full ">
          <dt className="mb-1 border-b-2 border-white/10 pb-2 text-2xl font-semibold md:border-none md:pb-1 md:text-xl">
            Product
          </dt>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/pricing"
            >
              Pricing
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href=""
            >
              Changelog
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href=""
            >
              Documentation
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 transition-colors hover:opacity-100"
              href=""
            >
              Log in
            </a>
          </dd>
        </dl>
        <dl className="w-full">
          <dt className="mb-1 border-b-2 border-white/10 pb-2 text-2xl font-semibold md:border-none md:pb-1 md:text-xl">
            Company
          </dt>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/approach"
            >
              Approach
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/blog"
            >
              Blog
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href=""
            >
              Contact
            </a>
          </dd>
        </dl>
        <dl className="w-full">
          <dt className="mb-1 border-b-2 border-white/10 pb-2 text-2xl font-semibold md:border-none md:pb-1 md:text-xl">
            Legal
          </dt>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </dd>
          <dd className="mb-2 first-of-type:pt-2">
            <a
              className="opacity-75 transition-colors hover:opacity-100"
              href="/terms-of-service"
            >
              Terms of service
            </a>
          </dd>
        </dl>
        <div className="w-full md:min-w-[360px]">
          <svg
            width="53"
            height="28"
            viewBox="0 0 53 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0226 18.2127C13.5747 17.4709 12.4174 17.8933 12.5675 18.7438L14.0402 27.0889C14.1241 27.5646 13.7527 28 13.2629 28H0.788942C0.353221 28 0 27.6518 0 27.2222V10.357C0 -0.185067 14.3472 -3.96647 19.8391 5.12818L25.3572 14.2663C25.6631 14.7729 26.4071 14.7729 26.713 14.2663L32.2311 5.12818C37.723 -3.96647 52.0702 -0.185067 52.0702 10.357V27.2222C52.0702 27.6518 51.717 28 51.2812 28H38.8073C38.3175 28 37.9461 27.5646 38.03 27.0889L39.5027 18.7438C39.6528 17.8933 38.4955 17.4709 38.0475 18.2127L35.2234 22.8894C31.1087 29.7035 20.9615 29.7035 16.8467 22.8894L14.0226 18.2127Z"
              fill="white"
            ></path>
          </svg>
          <p className="mt-4 opacity-75">
            Helping software teams use their product updates to drive
            stakeholder alignment and customer engagement.
          </p>
          <div className="mt-4 flex items-center justify-between gap-6 md:justify-start">
            <p className="text-sm opacity-75">
              © <span>2023</span> Makelog
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-3 transition-colors hover:bg-white/10"
              aria-label="Makelog Twitter / X"
              href=""
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.875 1H21L13.4235 9.97959L12.0204 7.93878L17.875 1Z"
                  fill="white"
                ></path>
                <path
                  d="M8.57653 12.0204L1 21H4.125L9.97959 14.0612L8.57653 12.0204Z"
                  fill="white"
                ></path>
                <path
                  d="M1 1H7.25L21 21H14.75L1 1Z"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17.875 1H21L13.4235 9.97959L12.0204 7.93878L17.875 1Z"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.57653 12.0204L1 21H4.125L9.97959 14.0612L8.57653 12.0204Z"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footter;
