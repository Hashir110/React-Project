import { useState } from "react";
import bannerImage from "../assets/images/Dp.jpg";
const About = () => {
  const [data, setData] = useState({
    Image: bannerImage,
    title: "Mobile & Web Developer",
    des1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in rem quas laboriosam enim? Voluptas molestiae assumenda, ipsam labore, adipisci atque rerum cum placeat esse eligendi, sint repellendus veniam odio!,`,
    des2: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis placeat quasi in suscipit aspernatur consequatur fugit ab blanditiis corporis?`,
    actionButton: {
      title: "Read More..",
    },
  });
  return (
    <>
      <div id="about" data-aos="fade-left">
        <div className="main-container py-16 border bg-gray-100">
          <h1 className="text-4xl pb-16 text-center underline font-bold">
            About Me
          </h1>
          {/* image container  */}
          <div className="flex items-center">
            <div className="w-full md:w-1/3 lg:w-1/3 flex justify-center">
              <img
                className="rounded-full shadow-lg w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover"
                src={bannerImage}
                alt="Hashir Shaikh"
              />
            </div>

            {/* text container  */}
            <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left space-y-4 ">
              <div className="space-y-5  w-2/3">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  {data.title}
                </h1>
                <p className="text-sm md:text-base">{data.des1}</p>
                <p
                  className="text-sm md:text-base"
                  text-2xl
                  md:text-3xl
                  font-semibold
                >
                  {data.des2}
                </p>
                <button className="bg-orange-500 px-3 py-2 shadow-lg rounded-full text-black">
                  {data.actionButton.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
