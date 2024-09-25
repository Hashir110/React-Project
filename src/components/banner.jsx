import { useRef, useEffect } from "react";
import bannerImage from "../assets/images/Dp.jpg";
import bannerBackground from "../assets/images/banner_wallpaper.svg";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Android Developer", "Backend Developer"], // Strings to display
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="banner" data-aos="fade-right">
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="main-container flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4 p-4"
      >
        {/* Text Section */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left space-y-4 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-4xl md:text-5xl font-bold">M Hashir Shaikh</h1>
          <h2 className="text-xl md:text-2xl">
            I Am <span ref={el} className="font-bold underline"></span>
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            cupiditate voluptatibus adipisci beatae eveniet dicta id quasi sint,
            enim eius molestiae asperiores sapiente perspiciatis rem expedita
            eum, nihil ullam neque maiores debitis? Voluptas laborum.
          </p>
          <div className="icon-container space-x-3 flex justify-center md:justify-start">
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i className="fa-brands fa-facebook text-3xl"></i>
            </a>
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i className="fa-brands fa-youtube text-3xl"></i>
            </a>
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i className="fa-brands fa-linkedin text-3xl"></i>
            </a>
          </div>
          <button
            className="px-4 py-2 rounded-full shadow-lg bg-orange-500 text-sm md:text-lg  hover:bg-orange-600 transition text-black"
            href="./contact"
          >
            Contact Me
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 lg:w-1/3 flex justify-center">
          <img
            className="rounded-full shadow-lg w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover"
            src={bannerImage}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
