import { useRef } from "react";
import bannerImage from "../assets/images/Dp.jpg";
import bannerBackground from "../assets/images/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontent Developer",
        "Android Developer",
        "Backend Developer",
        "Berozgar",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center  "
    >
      {/* text  */}
      <div className=" w-full flex items-center justify-center">
        {/* box 1  */}
        <div className="w-2/3 ms-10 space-y-2 text-white">
          <h3 className="text-3xl font-semibold">Hi, i am</h3>
          <h1 className=" text-5xl font-bold">M Hashir Shaikh</h1>
          <h2 className=" text-2xl ">
            I Am <span ref={el} className="font-bold underline"></span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            cupiditate voluptatibus adipisci beatae eveniet dicta id quasi sint,
            enim eius molestiae asperiores sapiente perspiciatis rem expedita
            eum, nihil ullam neque maiores debitis? Voluptas laborum.
          </p>
          <div className="icon-container space-x-3 flex">
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i class="fa-brands fa-facebook text-3xl"></i>
            </a>
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i class="fa-brands fa-instagram text-3xl"></i>
            </a>
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i class="fa-brands fa-youtube text-3xl"></i>
            </a>
            <a className="hover:bg-orange-600 cursor-pointer border px-3 py-4 w-10 h-10 bg-gray-800 rounded-full flex justify-center items-center">
              <i class="fa-brands fa-linkedin text-3xl"></i>
            </a>
          </div>
          <br />
          <a
            className="text-1xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="./contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* image  */}
      <div className=" w-full flex justify-center my-2 ">
        {/* box 2  */}
        <img className="rounded-full shadow-lg  " src={bannerImage} />
      </div>
    </div>
  );
};
export default Banner;
