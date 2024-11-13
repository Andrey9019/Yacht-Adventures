import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex mx-auto relative">
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-[#f6f5ef33]"></div>

      <div className="container pt-10 flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 18 18"
            fill="none"
            className="w-[18px] md:w-6"
          >
            <mask
              id="mask0_3500_65"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18"
            >
              <path
                d="M0 14.412L4.0605 18H15.972L17.6775 15.6038L0.0015 14.412H0ZM10.4887 0V14.3048L15.9705 14.682L10.4887 0ZM9.74175 2.4105L1.82175 13.6807L9.74175 14.2155V2.4105Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_3500_65)">
              <path d="M0 0H18V18H0V0Z" fill="url(#paint0_linear_3500_65)" />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3500_65"
                x1="7.66484"
                y1="2.72868e-06"
                x2="16.8581"
                y2="0.347733"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BEC7C2" />
                <stop offset="1" stopColor="#A1B5BA" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm font-medium uppercase md:font-bold md:text-xl">
            Yacht Adventures
          </span>
        </div>

        <nav className="flex text-sm flex-col gap-[14px]">
          <a
            href="#About"
            className="w-max hover:text-[--prime-dark] font-bold uppercase "
          >
            About
          </a>
          <a
            href="#Yachts"
            className="w-max hover:text-[--prime-dark] font-bold  uppercase"
          >
            Yachts
          </a>
          <a
            href="#Reviews"
            className="w-max hover:text-[--prime-dark] font-bold  uppercase"
          >
            Reviews
          </a>
        </nav>

        <div className="">
          <p className="text-sm font-bold uppercase mb-4">We in social</p>
          <ul className="flex gap-[14px]">
            <li className="w-8 h-8 border rounded-lg flex items-center justify-center hover:text-[--prime-dark] hover:border-[--prime-dark]">
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li className="w-8 h-8 border rounded-lg flex items-center justify-center hover:text-[--prime-dark] hover:border-[--prime-dark]">
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li className="w-8 h-8 border rounded-lg flex items-center justify-center hover:text-[--prime-dark] hover:border-[--prime-dark]">
              <a href="/">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>

        <div className="inline-flex justify-center gap-[14px]">
          <p>2023. Yacht Adventures</p>
          <a href="/" className="hover:text-[--prime-dark]">
            <p>Privacy Police</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
