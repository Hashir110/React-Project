import bannerImage from "../assets/images/banner_wallpaper.svg";

const My_Expertice = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-16 underline text-4xl text-center font-bold ">
          My Expertice
        </h1>
        <div
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
          }}
          className="main-container flex py-16"
        >
          {/* first box  */}
          <div className="w-2/3 text-white flex justify-center space-y-4">
            {/* text container  */}
            <div className=" text-center">
              <h1 className="text-3xl font-semibold">
                I love this technologies
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dicta quos velit, aspernatur, a animi accusamus amet,
              </p>
              <button className="px-3 py-2 rounded-full shadow-lg bg-orange-500 text-1xl ">
                Hire Me
              </button>
            </div>
          </div>

          {/* sec box  */}
          <div className="flex justify-center">
            {/* skills container  */}
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Html
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Java Script
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
                React js
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Bootstrap
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Next js
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Angularmt-2
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                AWS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Cloud
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Java Script
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                React js
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Css Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                React Framwork
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default My_Expertice;
