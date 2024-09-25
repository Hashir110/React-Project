import bannerImage from "../assets/images/banner_wallpaper.svg";

const My_Expertice = () => {
  return (
    <>
      <div id="expertice" data-aos="fade-up" className="w-full overflow-hidden">
        <div className="mt-2 w-full mx-auto">
          {/* Heading */}
          <h1 className="mb-16 underline text-3xl sm:text-4xl text-center font-bold">
            My Expertise
          </h1>
          <div
            style={{
              backgroundImage: `url(${bannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="main-container flex flex-col md:flex-row py-16 items-center justify-center bg-no-repeat"
          >
            {/* First Box */}
            <div className="w-full md:w-1/2 text-white flex justify-center p-4 md:p-0">
              <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-md mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold">
                  I love these technologies
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dicta quos velit, aspernatur, a animi accusamus amet,
                </p>
                <button className="px-4 py-2 rounded-full shadow-lg bg-orange-500 text-sm md:text-lg text-black hover:bg-orange-600 transition">
                  Hire Me
                </button>
              </div>
            </div>

            {/* Second Box (Skills Container) */}
            <div className="w-full md:w-1/2 flex justify-center p-4 md:p-0">
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg">
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  HTML
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  CSS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  JavaScript
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  React JS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  Tailwind CSS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  Bootstrap
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  Next JS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  Java
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  Angular
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  AWS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  Cloud
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  JavaScript
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  React Framework
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full hover:bg-orange-500 cursor-pointer text-sm sm:text-base lg:text-lg">
                  CSS Framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default My_Expertice;
